const Header = (title, date, temp) => {

  const headerWrapper = document.createElement('div');
  const hTitle = document.createElement('h1');
  const hDate= document.createElement('span');
  const hTemp= document.createElement('span');


  hDate.classList.add('date');
  headerWrapper.classList.add('header');
  hTemp.classList.add('temp');

  headerWrapper.appendChild(hTitle);
  headerWrapper.appendChild(hDate);
  headerWrapper.appendChild(hTemp);

  
  hTitle.textContent = title;
  hDate.textContent = date;
  hTemp.textContent = temp;   

  return headerWrapper;
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const headerAppender = (selector) => {
  const root = document.querySelector(selector);
  root.appendChild(Header(selector));

  // document.querySelector('selector').appendChild(Header(selector));
  // return headerAppender;
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
