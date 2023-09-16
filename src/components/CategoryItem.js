import React from 'react'

export default function CategoryItem(props) {
  return (
    <div>
      <div class="card" style={{width:"300px", margin:"12px"}}>
  <img src={props.imgUrl} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>
    <a href="#" class="btn btn-primary">Create Resume</a>
  </div>
</div>
    </div>
  )
}
