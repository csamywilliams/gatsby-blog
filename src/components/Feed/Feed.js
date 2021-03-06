import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Divider, Row, Col, Tag } from 'antd'
import { SelectOutlined } from '@ant-design/icons'
import { Link } from 'gatsby'
import Tags from './Tags'
import getCategoryColor from '../../utils/get-category-color'

dayjs.extend(relativeTime)

const Feed = ({ edges, allCategories }) =>
  edges.map(edge => {
    const {
      node: {
        html,
        fields: { slug, categorySlug, tagSlugs },
        frontmatter: { date, category, tags, priority }
      }
    } = edge
    let {
      node: {
        frontmatter: { title, description }
      }
    } = edge
    const featured = 1
    const imgFound = html && html.match(/<img\s+[^>]*?src=("|')([^"']+)/i)
    const imgSrc = imgFound && imgFound[2]
    const categoryColor = getCategoryColor({ allCategories, category })
    let externalLink = null
    console.log(description)

    const isTitleLinkPattern = /(?=.*\[)(?=.*\])(?=.*\()(?=.*\))/i
    if (isTitleLinkPattern.test(title)) {
      const found = title.match(/\[(.*)]\((.*)\)/)
      title = found[1]
      externalLink = found[2]
    }

    return (
      <div className={`post ${featured && 'post-featured'} relative`} key={slug}>
        <Row>
          {imgSrc && (
            <Col xs={24} sm={24} md={4} lg={4} xl={4}>
              <Link to={slug}>
                <img src={imgSrc} alt="" title="" className="mb-5 poster" />
              </Link>
            </Col>
          )}
          <Col
            xs={24}
            sm={24}
            md={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
            lg={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
            xl={{
              span: imgSrc ? 19 : 24,
              offset: imgSrc ? 1 : 0
            }}
          >
            <Row>
              <Col span={8}>
                <Link to={categorySlug} className="">
                  <Tag
                    className={`bg-${categoryColor} text-white border-transparent cursor-pointer px-4 py-1 rounded-full text-base font-semibold`}
                  >
                    {category}
                  </Tag>
                </Link>
              </Col>
              <Col span={16} className="text-right">
                {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
              </Col>
            </Row>
            <div>
              {externalLink ? (
                <a
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  <SelectOutlined className="text-3xl" />
                  <h3 className="text-3xl mt-3 mb-0"> {title} </h3>
                </a>
              ) : (
                <div>
                  <Link to={slug} className="text-black">
                    <h3 className="text-3xl mt-3 mb-0">{title} </h3>
                    <p className="text-lg m-0">{description}</p>
                  </Link>
                  <Link to={slug} className="text-xl">
                    Read →
                  </Link>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-right m-0">
              Posted{' '}
              <time dateTime={dayjs(date).format('MMMM D, YYYY')}>
                {dayjs(date).fromNow()}
              </time>
            </p>
          </Col>
        </Row>

        <Divider className={`bg-gray-300 mb-0 mt-6 ${featured && 'invisible'}`} />
      </div>
    )
  })

export default Feed
