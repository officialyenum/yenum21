import { Link } from '@chakra-ui/react';
import React, { FC } from 'react';


const ButtonLink:FC<any> = ({ChakraComponent, href, children, ...props}) => {
  return (
    <Link href={href} target={'_blank'} _hover={{
        textDecoration: 'none'
    }}>
        <ChakraComponent {...props}>
            {children}
        </ChakraComponent>
    </Link>
  )
}

export default ButtonLink