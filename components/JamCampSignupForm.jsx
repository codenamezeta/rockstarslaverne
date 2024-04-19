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
      <Label htmlFor='students_first_name'>Students First Name</Label>
      <Input id='students_first_name' type='text' name='students_first_name' />

      <Label htmlFor='students_last_name'>Students Last Name</Label>
      <Input id='students_last_name' type='text' name='students_last_name' />

      <Label htmlFor='date_of_birth'>Student's Date of Birth</Label>
      <Input id='date_of_birth' type='date' name='date_of_birth' />

      <Label htmlFor='instruments'>
        Instruments<small> cntl/cmd click to select multiple</small>
      </Label>
      <select id='instruments' name='instruments' multiple>
        <option value='guitar'>Guitar</option>
        <option value='bass'>Bass</option>
        <option value='drums'>Drums</option>
        <option value='piano'>Piano</option>
        <option value='vocals'>Vocals</option>
      </select>

      <Label htmlFor='previous_experience'>Previous Experience</Label>
      <TextArea id='previous_experience' name='previous_experience' />

      <Label htmlFor='parents_first_name'>Parent's First Name</Label>
      <Input id='parents_first_name' type='text' name='parents_first_name' />

      <Label htmlFor='parents_last_name'>Parent's Last Name</Label>
      <Input id='parents_last_name' type='text' name='parents_last_name' />

      <Label htmlFor='parents_phone_number'>Parent's Phone Number</Label>
      <Input id='parents_phone_number' type='tel' name='parents_phone_number' />

      <Label htmlFor='parents_email'>Parent's Email</Label>
      <Input id='parents_email' type='email' name='parents_email' />
      <ValidationError
        prefix='Email'
        field='parents_email'
        errors={state.errors}
      />

      <Label htmlFor='lunch_option'>Lunch Option? (+$35)</Label>
      <select id='lunch_option' name='lunch_option'>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </select>

      <Label htmlFor='food_issues'>Any Food Issues to be Aware of?</Label>
      <TextArea id='food_issues' name='food_issues' />

      <Button type='submit' disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  )
}
