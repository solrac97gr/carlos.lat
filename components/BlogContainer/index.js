import {BlogContainerStyle} from './index.style'
import styles from "../../styles/BlogPost.module.css"

export const BlogContainer = ({children}) => {
    return (
        <BlogContainerStyle className='line-numbers'>
            {children}
        </BlogContainerStyle>
    )
}