import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Button, Tag } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import { Post, CategoryTagInfo } from '../contracts/post';
import { decodeHtmlCharCodes } from '../utils';

import './Blog.scss';

export interface Props {
	pathContext: {
		group: { node: Post }[];
		index: number;
		pageCount: number;
	};
}

export const IndexPage = (props: Props) => {
	const { group, index, pageCount } = props.pathContext;
	const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
	const nextUrl = (index + 1).toString();
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
			{group.map(({ node }: { node: Post }) => {
				const fluid: FluidObject | null = (node.featured_media && node.featured_media.localFile && node.featured_media.localFile.childImageSharp && node.featured_media.localFile.childImageSharp.fluid) ? node.featured_media.localFile.childImageSharp.fluid : null;
				const categories: CategoryTagInfo[] = node.categories && node.categories.length > 0 ? node.categories.filter((category) => category.name !== 'Uncategorized') : new Array<CategoryTagInfo>();
				return (
					<div key={node.slug} className="posts">
						<Link to={'/post/' + node.slug}>
							<h1 className="black-color margin-bottom-16px">{decodeHtmlCharCodes(node.title)}</h1>
						</Link>
						{categories && categories.length > 0 && (
							<div className="categories margin-bottom-24px">
								{categories.map((category, categoryIndex) => {
									return (
										<Tag key={categoryIndex}>{category.name}</Tag>
									);
								})}
							</div>
						)}
						<Link to={'/post/' + node.slug}>
							{(fluid && fluid.src && fluid.src.length > 0) && <Image fluid={fluid} alt={node.title} />}
						</Link>
						<div className="post-excerpt" dangerouslySetInnerHTML={{ __html: decodeHtmlCharCodes(node.excerpt) }} />
					</div>
				);
			})}
			<div className="navigation-links">
				{index > 1 && (
					<div className="previous-link">
						<Link to={'/posts/' + previousUrl}>
							<Button type="primary">Go to Previous Page</Button>
						</Link>
					</div>
				)}
				{index <= (pageCount - 1) && (
					<div className="next-link">
						<Link to={'/posts/' + nextUrl}>
							<Button type="primary">Go to Next Page</Button>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
};

export default IndexPage;
