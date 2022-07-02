import {BlogContainerStyle} from './index.style'

export const BlogContainer = ({children}) => {
    return (
        <BlogContainerStyle>
            {children}
        </BlogContainerStyle>
    )
}