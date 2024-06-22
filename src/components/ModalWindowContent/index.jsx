import styled from './ModalWindowContent.module.css'

const ModalWindowContent = () => {
  return (
    <div className={styled.modal_content}>
        <h3>Congratulations!</h3>
      <p>Congratulations! Your order has been successfully placed on the website.</p>
      <p>A manager will contact you shortly to confirm your order.</p>
    </div>
    )
}

export default ModalWindowContent