import Modal from 'components/atoms/Modal'

const AddNewProduct = ({
  show,
  setShow,
  actions,
}: {
  show: boolean
  actions: any
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Modal header="Add new product" open={show} setOpen={setShow}>
      <div className="min-w-132" id="add-new-products__modal-container"></div>
    </Modal>
  )
}

export default AddNewProduct
