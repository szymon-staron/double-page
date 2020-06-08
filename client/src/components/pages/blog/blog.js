import React from 'react';
import styles from './blog.module.scss';
import Container from '../../layout/container/container';
import FirstBanner from '../../common/banner/firstBanner';
import SecondBanner from '../../common/banner/secondBanner';
import Post from '../../common/post/post';
const Blog =()=>{

    return(
        <Container>
            

            <section className={styles.banner}>
                <SecondBanner height='100%'/>
                <FirstBanner height='100%' width='100%' position='center'/>
            </section>
            <section className={styles.contentBlog}>
            <header><h3 className={styles.title}>Blog</h3></header>
               <Post/>
                
            </section>
        </Container>
    )
}

export default Blog;