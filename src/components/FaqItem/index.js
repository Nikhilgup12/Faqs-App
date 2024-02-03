import './index.css'

const FaqItem = props => {
  const {faqItem, toggleItem, isActive} = props
  const {questionText, answerText, id} = faqItem
  const onDisplayQuestion = () => {
    toggleItem(id)
  }

  const image = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isActive ? "minus" : "plus"
  
  return (
    <li className="faq-list">
      <div className="faq-question-list">
        <h1 className="faq-question-heading"> {questionText} </h1>
        <button className="plus-btn" onClick={onDisplayQuestion}>
          <img src={image} className="faq-plus-image" alt={altText} />
        </button>
      </div>
      {isActive ? (
        <div className="faq-answer">
          <hr />
          <p className="faq-answer-para"> {answerText} </p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}
export default FaqItem
