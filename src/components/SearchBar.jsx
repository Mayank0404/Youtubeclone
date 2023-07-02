import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {Button,Stack} from 'react-bootstrap'
import { useState } from 'react';


const SearchBar =({onSubmit}) =>{
    const [search,setsearch]=useState('')

    return<InputGroup className="mb-3">
      <Form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(search) 

      }}>
      <Stack direction="horizontal" gap={3}>
    <Form.Control
      placeholder="SEARCH....."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={e => setsearch(e.target.value)}
      value={search}
    />
        <Button type='submit' variant='primary' id="basic-addon2">SEARCH</Button>

    </Stack>
    </Form>
  </InputGroup>

}

export default SearchBar

  