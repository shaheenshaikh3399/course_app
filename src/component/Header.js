import React from 'react'
import { CardBody,Card } from 'reactstrap'

export default function Header() {
  return (
    <div>
        <Card className='my-2 bg-primary' >
        <CardBody>    
        <h2 className='text-center my-3' >Welocome to Courses Application</h2>
        </CardBody>
        </Card>

        </div>
  )
}
