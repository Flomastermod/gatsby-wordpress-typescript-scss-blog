import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Button } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

export interface Props {
	pathContext: {
		group: any[];
		index: number;
		pageCount: number;
	};
}

export const IndexPage = (props: Props) => {

	const { group, index, pageCount } = props.pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();

	console.log(props);

	const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `);

	return (
		<Layout>
			<SEO title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`} description={site.siteMetadata.description} />
			{group.map(({ node }: any) => {
				const fixed = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fixed) ? node.featured_media.localFile.childImageSharp.fixed : null;
				return (
					<div key={node.slug} className="post margin-bottom-48px">
						<Link to={'/post/' + node.slug}>
							<h3>{decodeHtmlCharCodes(node.title)}</h3>
							{fixed && <Image fixed={fixed} />}
						</Link>
						<div className="post-content" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
					</div>
				);
			})}
			<div className="navigation-links">
				{index > 0 &&
					<div className="previous-link">
						<Link to={'/posts/' + previousUrl}>
							<Button type="primary">Go to Previous Page</Button>
						</Link>
					</div>
				}
				{index < (pageCount - 1) &&
					<div className="next-link">
						<Link to={'/posts/' + nextUrl}>
							<Button type="primary">Go to Next Page</Button>
						</Link>
					</div>
				}
			</div>
		</Layout>
	);
};

export default IndexPage;
