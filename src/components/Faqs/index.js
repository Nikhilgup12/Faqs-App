import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  state = {activeItem: {}}

  toggleItem = id => {
    this.setState(preVstate => ({
      activeItem: {...preVstate.activeItem, [id]: !preVstate.activeItem[id]},
    }))
  }

  render() {
    const {faqsList} = this.props
    const {activeItem} = this.state
    return (
      <div className="faq-main-container">
        <div className="faq-container">
          <div className="faq-question-container">
            <h1 className="faq-heading"> FAQs </h1>
            <ul className="faq-list-container">
              {faqsList.map(each => (
                <FaqItem
                  faqItem={each}
                  key={each.id}
                  toggleItem={this.toggleItem}
                  isActive={activeItem[each.id]}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
