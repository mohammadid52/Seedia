/* eslint-disable quotes */
import errorAnimation from 'assets/animation/error.json'
import animation from 'assets/animation/searching-user.json'
import successAnimation from 'assets/animation/success.json'
import EmptyState from 'components/atoms/EmptyState'
import Meta from 'components/atoms/Meta/Meta'
import Modal from 'components/atoms/Modal'
import Loading from 'components/Loading'
import { links } from 'constants/Links'
import { useUserContext } from 'context/UserContext'
import 'css/aos.css'
import 'css/bootstrap.min.css'
import 'css/font-awesome/css/all.min.css'
import 'css/main.css'
import useAccountType from 'hooks/useAccountType'
import { useRouter } from 'hooks/useRouter'
import useUser from 'hooks/useUser'
// @ts-ignore
import html2pdf from 'html2pdf.js'
import {
  IEducation,
  IExperience,
  IParent,
  ISkill,
  ISocialMedia,
  SkillStrength,
} from 'interfaces/UniversalInterface'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useHistory } from 'react-router'
import { wait } from 'utils/wait'

const RenderHtml = ({ userData }: { userData: IParent }) => {
  const route: any = useRouter()
  const { profileUrl } = route?.match?.params

  const { otherUserData, iAmOwnerOfThisProfile, isFetched, isLoading } =
    useUser(profileUrl, userData)

  const user = iAmOwnerOfThisProfile ? userData : otherUserData

  const { isPersonal, isBusiness } = useAccountType(user)
  const { location, background } = user

  const address = `${location?.address || ''}, ${location?.city || ''}, ${
    location?.state || ''
  } ${location?.country || ''}`

  let birthDate = new Date(user?.birthDate)

  const userAge = birthDate
    ? new Date().getFullYear() - birthDate.getFullYear()
    : false

  function getMediaUrl(type: string) {
    if (user?.socialMedia) {
      return `https://${
        user?.socialMedia.find((s: ISocialMedia) => s.name === type).url
      }`
    }
  }

  function renderStrength(strength: SkillStrength) {
    switch (strength) {
      case 'Poor':
        return 30
      case 'Average':
        return 50
      case 'Good':
        return 70
      case 'Excellent':
        return 100

      default:
        return 50
    }
  }

  function onContact(e: any) {
    e.preventDefault()
    const { companyName = '', yourName = '', message = '' } = contactFields
    window.open(
      `mailto:${user.email}?body=${message}&subject=From ${
        companyName || yourName
      }`
    )
  }

  function convertToPdf() {
    const el = document.getElementById('exportToPdf')
    // @ts-ignore
    document
      .querySelectorAll('#d-print-none')
      .forEach((el) => (el.innerHTML = ''))

    $('#contact-details').addClass('col-md-7')

    var opt = {
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: 'px',
        format: [el.offsetHeight, el.offsetWidth],
        orientation: 'portrait',
      },
    }

    html2pdf().set(opt).from(el).save()
  }

  const [contactFields, setContactFields] = useState({
    companyName: isBusiness ? user?.business?.name : user?.company?.companyName,
    yourName: user?.fullName || '',
    email: user?.email || '',
    message: '',
  })

  const onChange = (e: any) => {
    const { name, value } = e.target
    setContactFields({ ...contactFields, [name]: value })
  }

  const [imageUrl, setImageUrl] = useState('')

  const getBase64FromUrl = async (url: RequestInfo): Promise<unknown> => {
    const data = await fetch(url)
    const blob = await data.blob()
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        const base64data = reader.result
        resolve(base64data)
      }
    })
  }

  useEffect(() => {
    if (!imageUrl && user.profilePicture) {
      getBase64FromUrl(user.profilePicture)
        .then(setImageUrl)
        .catch(console.error)
    }
  }, [user.profilePicture, imageUrl])

  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const [isChecking, setIsChecking] = useState(false)

  function checkValidity(): boolean {
    setIsChecking(true)
    let isValid = true
    if (userData) {
      const { background } = userData
      if (!userData?.profileUrl) {
        setError('Please add your profile picture')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!background?.summary) {
        setError('Please add summary')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!userData.birthDate) {
        setError('Please add birthdate')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!background?.skills) {
        setError('Please add skills')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!background?.experiences) {
        setError('Please add experiences')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!isBusiness && !background?.education) {
        setError('Please add education')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
      if (!userData?.socialMedia) {
        setError('Please add atleast one social media link')
        isValid = false
      } else {
        isValid = true
        setError('')
      }
    }
    setIsSuccess(false)
    wait(3000).then(() => setIsChecking(false))

    return isValid
  }
  const [showResumeValidityModal, setShowResumeValidityModal] = useState(false)

  const history = useHistory()
  useEffect(() => {
    const isValid = checkValidity()

    if (!isValid) {
      setShowResumeValidityModal(true)
      // return history.push(links.getProfile(userData))
    }
  }, [])

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <>
      <Meta
        pageUrl={window.location.href}
        imageUrl={user?.profileUrl}
        pageTitle={`Resume - ${user?.fullName} | 13RMS `}
        title={user?.fullName}
        // description={user?.background?.summary}
        // keywords={product?.tags?.join(', ')}
        userName={user?.profileUrl}
      />

      <Modal
        open={showResumeValidityModal}
        setOpen={setShowResumeValidityModal}
      >
        <div className="min-w-112 max-w-122 min-h-112">
          {isChecking ? (
            <EmptyState
              title="Verifying data"
              subtitle="Checking required fields..."
              animation={animation}
            />
          ) : error ? (
            <EmptyState
              showEditOption
              title="Error"
              subtitle={error}
              animation={errorAnimation}
            />
          ) : isSuccess ? (
            <EmptyState
              showEditOption
              title="Hurrah"
              subtitle={'You can see your resume now'}
              btnText="See resume"
              onBtnClick={() =>
                window.open(links.seeResume(user.profileUrl), '_blank')
              }
              animation={successAnimation}
            />
          ) : (
            <div />
          )}
        </div>
      </Modal>

      {!isChecking && isSuccess && (
        <div>
          <div className="page-content  pt-4">
            <div className="container ">
              <div id="exportToPdf" className="cover shadow-lg bg-white">
                <div className="cover-bg p-3 p-lg-4 text-white">
                  <div className="row">
                    <div className="col-lg-4 col-md-5">
                      <div className="avatar hover-effect bg-white shadow-sm p-1">
                        <img
                          src={imageUrl}
                          id="imageid"
                          alt=""
                          width="200"
                          height="200"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-7 text-center text-md-start">
                      <h2
                        className="h1 mt-2"
                        data-aos="fade-left"
                        data-aos-delay="0"
                      >
                        {user?.fullName}
                      </h2>
                      <p data-aos="fade-left" data-aos-delay="100">
                        {isBusiness
                          ? user?.business?.name
                          : isPersonal
                          ? user?.company?.companyName
                          : user?.background?.education &&
                            user?.background?.education[0].name}
                      </p>
                      <div
                        className="d-print-none"
                        id="d-print-none"
                        data-aos="fade-left"
                        data-aos-delay="200"
                      >
                        <div
                          className="btn btn-light text-dark shadow-sm mt-1 me-1"
                          onClick={convertToPdf}
                        >
                          Download CV
                        </div>

                        <a
                          className="btn btn-success shadow-sm mt-1"
                          href="#contact"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-section pt-4 px-3 px-lg-4 mt-1">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="h3 mb-3">About Me</h2>
                      <p>{user?.background?.summary}</p>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="row mt-2">
                        {userAge && (
                          <>
                            <div className="col-sm-4">
                              <div className="pb-1">Age</div>
                            </div>
                            <div className="col-sm-8">
                              <div className="pb-1 text-secondary">
                                {userAge}
                              </div>
                            </div>
                          </>
                        )}
                        <div className="col-sm-4">
                          <div className="pb-1">Email</div>
                        </div>
                        <div className="col-sm-8">
                          <div className="pb-1 break-words">{user?.email}</div>
                        </div>
                        <div className="col-sm-4">
                          <div className="pb-1">Phone</div>
                        </div>
                        <div className="col-sm-8">
                          <div className="pb-1 text-secondary">
                            {' '}
                            {user?.business?.number}
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="pb-1">Address</div>
                        </div>
                        <div className="col-sm-8">
                          <div className="pb-1 text-secondary">{address}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {user?.background?.skills && (
                  <div className="html2pdf__page-break">
                    <hr className="d-print-none" id="d-print-none" />
                    <div className="skills-section px-3 px-lg-4">
                      <h2 className="h3 mb-3">Professional Skills</h2>
                      <div className="row">
                        <div className="col-md-6">
                          {user?.background?.skills.map((skill: ISkill) => {
                            const strength = renderStrength(skill?.strength)
                            return (
                              <div key={skill.id} className="mb-2">
                                <span>{skill.name}</span>
                                <div className="progress my-1">
                                  {/* @ts-ignore */}
                                  <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    data-aos="zoom-in-right"
                                    data-aos-delay="100"
                                    data-aos-anchor=".skills-section"
                                    style={{ width: `${strength}%` }}
                                    aria-valuenow={strength}
                                    data-valuenow={strength}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {background?.experiences && (
                  <>
                    <hr className="d-print-none" id="d-print-none" />
                    <div className="work-experience-section px-3 px-lg-4">
                      <h2 className="h3 mb-4">Work Experience</h2>
                      <div className="timeline">
                        {/* 342 */}
                        {background &&
                          background?.experiences &&
                          background?.experiences?.length > 0 &&
                          background?.experiences.map((exp: IExperience) => (
                            <div
                              key={exp.id}
                              className="timeline-card timeline-card-primary card shadow-sm"
                            >
                              <div className="card-body">
                                <div className="h5 mb-1">
                                  {exp.jobTitle}{' '}
                                  <span className="text-muted h6">
                                    at {exp.companyName}
                                  </span>
                                </div>
                                <div className="text-muted text-small mb-2">
                                  {moment(exp.joinDate).format('MMM YYYY')} -{' '}
                                  {moment(exp.leaveDate).format('MMM YYYY')}
                                </div>
                                <div>{exp.description}</div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
                {background?.education && (
                  <>
                    <hr className="d-print-none" id="d-print-none" />
                    {/* <div className="page-break"></div> */}
                    <div className="education-section px-3 px-lg-4 pb-4">
                      <h2 className="h3 mb-4">Education</h2>
                      <div className="timeline">
                        {background?.education?.length > 0 &&
                          background.education?.map((ed: IEducation) => (
                            <div
                              key={ed.id}
                              className="timeline-card timeline-card-success card shadow-sm"
                            >
                              <div className="card-body">
                                <div className="h5 mb-1">
                                  {ed.degree}{' '}
                                  <span className="text-muted h6">
                                    from {ed.from}
                                  </span>
                                </div>
                                <div className="text-muted text-small mb-2">
                                  {ed.from} - {ed.to}
                                </div>
                                <div>{ed.name}</div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </>
                )}
                <hr className="d-print-none" id="d-print-none" />
                <div
                  className="contant-section html2pdf__page-break px-3 px-lg-4 pb-4"
                  id="contact"
                >
                  <h2 className="h3 text mb-3">Contact</h2>
                  <div className="row">
                    <div id="d-print-none" className="col-md-7 d-print-none">
                      <div className="my-2">
                        <form className="d-print-none" onSubmit={onContact}>
                          <div className="row">
                            {isBusiness && (
                              <div className="col-12 mb-2">
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  onChange={onChange}
                                  name="companyName"
                                  placeholder="Your Company Name"
                                  required
                                />
                              </div>
                            )}
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="text"
                                onChange={onChange}
                                id="name"
                                name="yourName"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <input
                                className="form-control"
                                type="email"
                                onChange={onChange}
                                id="email"
                                name="email"
                                placeholder="Your E-mail"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group my-2">
                            <textarea
                              className="form-control"
                              style={{ resize: 'none' }}
                              id="message"
                              onChange={onChange}
                              name="message"
                              rows={4}
                              placeholder="Your Message"
                              required
                            ></textarea>
                          </div>
                          <button
                            className="btn btn-primary mt-2"
                            type="submit"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="col" id="contact-details">
                      <div className="mt-2">
                        <h3 className="h6">Address</h3>
                        <div className="pb-2 text-secondary">{address}</div>
                        <h3 className="h6">Phone</h3>
                        <div className="pb-2 text-secondary">
                          {user?.business?.number}
                        </div>
                        <h3 className="h6">Email</h3>
                        <div className="pb-2 text-secondary">{user?.email}</div>
                      </div>
                    </div>
                    <div className="col d-none d-print-block">
                      <div className="mt-2">
                        <div>
                          <div className="mb-2">
                            <div className="text-dark">
                              <i className="fab fa-twitter mr-1"></i>
                              <span>{getMediaUrl('twitter')}</span>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="text-dark">
                              <i className="fab fa-facebook mr-1"></i>
                              <span>{getMediaUrl('facebook')}</span>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="text-dark">
                              <i className="fab fa-instagram mr-1"></i>
                              <span>{getMediaUrl('instagram')}</span>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="text-dark">
                              <i className="fab fa-github mr-1"></i>
                              <span>{getMediaUrl('github')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer
            id="d-print-none"
            className="pt-4 pb-4 text-muted text-center d-print-none"
          >
            <div className="container">
              <div className="my-3">
                <div className="h4">{user.fullName}</div>
                <div className="footer-nav">
                  <nav role="navigation">
                    <ul className="nav justify-content-center">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href={getMediaUrl('twitter')}
                          title="Twitter"
                        >
                          <i className="fab fa-twitter"></i>
                          <span className="menu-title sr-only">Twitter</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href={getMediaUrl('facebook')}
                          title="Facebook"
                        >
                          <i className="fab fa-facebook"></i>
                          <span className="menu-title sr-only">Facebook</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href={getMediaUrl('instagram')}
                          title="Instagram"
                        >
                          <i className="fab fa-instagram"></i>
                          <span className="menu-title sr-only">Instagram</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href={getMediaUrl('github')}
                          title="Github"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-github"></i>
                          <span className="menu-title sr-only">Github</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
      <Helmet>
        <script
          id="removeThis1"
          src="scripts/bootstrap.bundle.min.js?ver=1.2.0"
        ></script>
        <script id="removeThis2" src="scripts/aos.js?ver=1.2.0"></script>
        <script id="removeThis3" src="scripts/main.js?ver=1.2.0"></script>
      </Helmet>
    </>
  )
}

const Resume = ({ userData }: { userData: IParent }) => {
  const { setDarkMode } = useUserContext()
  useEffect(() => {
    setDarkMode(false)

    $('html').removeClass('dark')
  }, [])
  return <div>{<RenderHtml userData={userData} />}</div>
}

export default Resume
