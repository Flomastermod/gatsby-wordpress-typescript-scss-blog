import React from 'react';
import { graphql, Link } from 'gatsby';

import { Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

export const BlogPost = ({ data, pageContext }: { data: any, pageContext: any }) => {
	return (
		<Layout>
			<SEO title={data.wordpressPost.title} description={data.wordpressPost.excerpt} />
			<h1>{decodeHtmlCharCodes(data.wordpressPost.title)}</h1>
			<p>Written by {decodeHtmlCharCodes(data.wordpressPost.author.name)} on {data.wordpressPost.date}</p>
			<div className="margin-top-24px" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(data.wordpressPost.content) }} />
			<div className="margin-bottom-24px navigation-links">
				{pageContext.previous && pageContext.previous.slug &&
					<Link to={`/post/${pageContext.previous.slug}`}>
						<Button type="primary">Go to Previous Post</Button>
					</Link>
				}
				{pageContext.next && pageContext.next.slug &&
					<Link to={`/post/${pageContext.next.slug}`}>
						<Button type="primary">Next Post</Button>
					</Link>
				}
			</div>
		</Layout>
	);
};

export default BlogPost;

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`;
