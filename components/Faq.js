import React, { Component } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion'
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
// import img from '../../images/zeta/guitar-kid.jpg'

class Faq extends Component {
  render() {
    return (
      <section className='faq-area ptb-100' id='faqs'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Frequently Asked Questions</h2>
            <div className='bar'></div>
          </div>

          <div className='faq'>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Are there discounts for enrolling multiple students?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes! There is a $10 discount on each additional 30 minute
                    private lesson you are enrolled in.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I get a bi-weekly {'(two per month)'} plan?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In certain circumstances, clients can do bi-weekly lesson
                    plans. We will try our absolute best to accommodate all
                    scheduling requests you have. Please be aware that this is
                    not always possible and largely depends on your
                    availability, instructor’s availability, and operation
                    hours.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What if I need to cancel?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Simply give the studio a 24 hour notice of lesson
                    cancellation and we’ll gladly issue your account a free
                    makeup lesson that you can schedule at a later date. We know
                    your time is valuable and rescheduling can be difficult both
                    with an in demand instructors schedule and your own personal
                    schedule so in some cases, an instructor may create a custom
                    video in place of a face to face make up lesson for
                    convenience.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Are short months prorated?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes. We consider three to five lessons taught per month as a
                    full month. Invoices are prorated for two or fewer lessons
                    per month. We typically close on the following days each
                    year: New Year’s Day, Labor Day, Independence Day,
                    Thanksgiving, and the day after, Christmas, including any
                    days between Christmas and New Year’s Day.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I change plans or cancel anytime?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    There are no contracts and you can always cancel at anytime.
                    To discontinue lessons and stop automatic payments, simply
                    notify the front desk at two business days before the date
                    of your next charge. Notice given to the instructors only,
                    verbally or otherwise as well as continued non-attendance
                    does not constitute withdrawal from lessons or classes.
                    Please make sure you visit the front desk or email your
                    studio location directly.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I learn more than one instrument at a time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Absolutely! We encourage this as it’s a fantastic way to
                    learn and better retain your skills. If this is something
                    you’re interested in, please let us know. We will do our
                    best to fit you with an instructor who can teach the
                    instruments you’re interested in learning. You don’t need to
                    pay extra or schedule additional lessons as your time with
                    your instructor is yours to do with as you wish. However,
                    please be aware that not all instructors can teach multiple
                    instruments. In certain instances, you may need to sign up
                    for additional classes if there is no instructor available
                    to teach the combination of instruments you’re looking to
                    learn.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What if I want to take an hour long lesson?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Well then, you’re extra awesome. Hour long lessons are
                    available if you wish. For each half hour of lessons after
                    the first lesson you sign up for per week we will take off
                    $10 from the cost, this includes hour long lessons.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* <img src={img} alt='Guitar kid' /> */}
      </section>
    )
  }
}

export default Faq
