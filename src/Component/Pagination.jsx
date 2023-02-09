import React from 'react'

const Pagination = (props) => {
   
    const pageNumbers = []

for (let i = 1; i <= Math.ceil(props.total / props.perPage  ); i++) {
    pageNumbers.push(i);
}
  return (
    <div className="btn-group">
  <button disabled={props.currentPage <= 1} onClick={props.paginateBackward} className="btn">   <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3v83.4l171.5 142.9zM256 352V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29v-64z" />
    </svg></button>
 <p className="btn">{props.currentPage}</p>
  <button disabled={props.currentPage === props.total} onClick={props.paginateForward} className="btn"><svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      
    >
      <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4L224 214.3v83.4L52.5 440.6zM256 352V96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4S256 428.4 256 416v-64z" />
    </svg></button>
</div>
  )
}

/* const isLastPage = pageItems.length !== itemsPerPage || endIndex === items.length; */
export default Pagination