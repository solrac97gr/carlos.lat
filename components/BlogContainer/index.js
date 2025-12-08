import {BlogContainerStyle} from './index.styles'

export const BlogContainer = ({children}) => {
    return (
        <BlogContainerStyle className='line-numbers'>
            {children}
        </BlogContainerStyle>
    )
}