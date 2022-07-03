import {BlogContainerStyle} from './index.style'

export const BlogContainer = ({children}) => {
    return (
        <BlogContainerStyle className='line-numbers'>
            {children}
        </BlogContainerStyle>
    )
}