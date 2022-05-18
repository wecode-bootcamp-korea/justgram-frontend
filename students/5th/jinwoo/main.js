const comment = document.getElementById('comment');
const writeBtn = document.getElementById('write-btn');
const commentContainer = document.getElementsByClassName('feeds-comments')[0];
const feeds = document.getElementsByClassName('feeds')[0];
const heartDiv = document.getElementById('feed-heart');

let h = 750;
writeBtn.disabled = true;

const activateBtn = () => {
  if (comment.value !== '') {
    writeBtn.disabled = false;
    writeBtn.style.cursor = 'pointer';
    writeBtn.style.color = 'blue';
  } else {
    writeBtn.disabled = true;
    writeBtn.style.cursor = 'auto';
    writeBtn.style.color = 'lightblue';
  }
}

const postComment = () => {
  const container = document.querySelector('.feeds-comments');
  const div = document.createElement("div");
  const div3 = document.createElement("div");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const i = document.createElement('i');
  const btn = document.createElement('button');
  const div2 = document.createElement("div");

  btn.className = 'del-comment-btn';
  i.className = 'fa-solid fa-heart';
  div.className = 'user-comment';
  span.className = 'nickname';
  span2.className = 'comment-value';

  i.style.color = 'gray';

  btn.innerHTML = '삭제';
  span2.innerHTML = ` ${comment.value}`;
  span.innerHTML = 'im_jw';

  div.appendChild(div3);
  div3.appendChild(span);
  div3.appendChild(span2);

  div2.appendChild(i);
  div2.appendChild(btn);
  div.appendChild(div2);
  commentContainer.prepend(div);
  comment.value = '';
  writeBtn.disabled = true;
  writeBtn.style.cursor = 'auto';
  writeBtn.style.color = 'lightblue';

  h += 24.5;
  feeds.style.height = `${h}px`;

  div2.addEventListener('click', () => {
    const commentHeart = div2.getElementsByClassName('fa-heart')[0];
    if (commentHeart.style.color === 'gray') {
      commentHeart.style.color = 'red';
    } else {
      commentHeart.style.color = 'gray';
    }
  })

  btn.addEventListener('click', () => {
    container.removeChild(div);
    h -= 24.5;
    feeds.style.height = `${h}px`;
  })
}

const enterkey = () => {
  if (comment.value !== '' && window.event.keyCode == 13) {
    postComment();
  }
}

const changeColor = () => {
  const heartIcon = heartDiv.getElementsByClassName('fa-heart')[0]
  if (heartIcon.style.color === 'gray') {
    heartIcon.style.color = 'red';
  } else {
    heartIcon.style.color = 'gray';
  }
}

comment.addEventListener('keydown', activateBtn);
comment.addEventListener('keydown', enterkey);
writeBtn.addEventListener('click', postComment);
heartDiv.addEventListener('click', changeColor);