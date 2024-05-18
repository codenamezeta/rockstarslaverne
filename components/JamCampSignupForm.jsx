import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`

const Label = styled.label`
  margin-bottom: 8px;
  color: #fff;
`

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`

const TextArea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
`

const Button = styled.button`
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #3a0a03;
  color: #fff;
  border: none;
  cursor: pointer;
`

export default function JamCampSignupForm() {
  const [state, handleSubmit] = useForm('mqkyrrry')
  if (state.succeeded) {
    return (
      <p>
        Thanks for enrolling! You should receive a follow up email from our
        staff in the next few days.
        <br />
        Refresh the page to enroll additional students.
      </p>
    )
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <Label htmlFor='session'>Please choose a Summer Camp Session *</Label>
      <select
        id='session'
        type='text'
        name='session'
        style={{ marginBottom: '2em' }}
        required
      >
        <option value='Session 1: 7/22 – 7/26 10am-2pm'>
          Session 1: July 22nd – July 26th 10am-2pm
        </option>
        <option value='Session 2: 8/5 – 8/9 10am-2pm'>
          Session 2: August 5th – August 9th 10am-2pm
        </option>
      </select>

      <Label htmlFor='students_first_name'>Student's First Name *</Label>
      <Input
        id='students_first_name'
        type='text'
        name='students_first_name'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='students_last_name'>Student's Last Name *</Label>
      <Input
        id='students_last_name'
        type='text'
        name='students_last_name'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='date_of_birth'>Student's Date of Birth *</Label>
      <Input
        id='date_of_birth'
        type='date'
        name='date_of_birth'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='instruments'>
        Instruments Preferred
        <small style={{ fontSize: '0.75em' }}>
          {' '}
          cntl/cmd click to select multiple
        </small>
      </Label>
      <select
        id='instruments'
        name='instruments'
        multiple
        style={{ marginBottom: '2em' }}
      >
        <option value='guitar'>Guitar</option>
        <option value='bass'>Bass</option>
        <option value='drums'>Drums</option>
        <option value='piano'>Piano</option>
        <option value='vocals'>Vocals</option>
      </select>

      <Label htmlFor='previous_experience'>Previous Experience</Label>
      <TextArea
        id='previous_experience'
        name='previous_experience'
        style={{ marginBottom: '2em' }}
      />

      <Label htmlFor='parents_first_name'>Parent's First Name *</Label>
      <Input
        id='parents_first_name'
        type='text'
        name='parents_first_name'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='parents_last_name'>Parent's Last Name *</Label>
      <Input
        id='parents_last_name'
        type='text'
        name='parents_last_name'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='parents_phone_number'>Parent's Phone Number *</Label>
      <Input
        id='parents_phone_number'
        type='tel'
        name='parents_phone_number'
        style={{ marginBottom: '2em' }}
        required
      />

      <Label htmlFor='parents_email'>Parent's Email *</Label>
      <Input
        id='parents_email'
        type='email'
        name='parents_email'
        style={{ marginBottom: '2em' }}
        required
      />
      <ValidationError
        prefix='Email'
        field='parents_email'
        errors={state.errors}
      />

      <Label htmlFor='lunch_option'>Lunch Option? (+$35)</Label>
      <select
        id='lunch_option'
        name='lunch_option'
        style={{ marginBottom: '2em' }}
      >
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
        <option value='unsure'>Unsure</option>
      </select>

      <Label htmlFor='food_issues'>Any Food Issues to be Aware of?</Label>
      <TextArea id='food_issues' name='food_issues' />

      <Button type='submit' disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  )
}
