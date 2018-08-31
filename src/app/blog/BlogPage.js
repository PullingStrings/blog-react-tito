import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import StatusTag from '../components/StatusTag';


const BlogPage = ({ to, date, status, props }) => (
  <div>
    <article className="">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.icon} alt="icon" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <h1>{props.title}</h1>
          <Markdown
            source={
              props.limit
                ? props.content.split(' ').splice(0,props.limit).join(' ').concat('...')
                : props.content
            }
          />
        </div>
        { props.children }
      </div>
    </article>
    <nav className="level">
      <div className="level-left">
        <Link className="level-item button is-small is-link is-outlined" to={to}>
          { to === '/blog' ? 'Back to Blog' : 'Read More' }
        </Link>
      </div>
      <div className="level-right">
        <StatusTag status={status} />
        <p className="level-item has-text-link is-size-7">
          {moment(date).calendar(null, {
            sameDay: '[Today]',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MMM Do YYYY'
          })}
        </p>
      </div>
    </nav>
  </div>

);
export default BlogPage;
