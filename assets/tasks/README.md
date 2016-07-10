# Simple React usage challenge
React is a library for building user interfaces, and every user interface consist of some reusable components.

Let's imagine you already have some exisiting application, and your next story from sprint backlog is to create some new reusable components. 

Your existitng application has: 
* JavaScript ES6
* [React](https://facebook.github.io/react/)
* [Semantic UI](http://semantic-ui.com/) as CSS framework

And you already have one component - Select. Layout and styles for this component were taken from Semantic UI, but component logic was defined with React. You can find more details by [link](https://github.com/mikhail-riabokon/simple_react_usage/blob/master/assets/tasks/select/select.jsx)

So, as select is not only one component which you need, you should define a few more components in the same way.
* [Basic tabs](http://semantic-ui.com/modules/tab.html#/examples)
* [Basic modal](http://semantic-ui.com/modules/modal.html)
* [Loader](http://semantic-ui.com/elements/loader.html)

### Basic Tabs React component
```react
const tabs = [
  {
    title: 'Tab title',
    content: 'Tab content',
    id: 'tab-id'
 }
];

<Tabs tabs={tabs} selectedTab="some-tab-id" />
```
**Where:**
* tabs - array of tabs data
* selectedTab - initial selected tab

Should be aviliable by link [http://localhost:3000/tasks/tabs/](http://localhost:3000/tasks/tabs/)

### Basic Modal React component
```react
<Modal isShown={false}>
  <h1>Some modal content</h1>
</Modal>
```
**Where:**
* isShown - flag which will show or hide modal

Should be aviliable by link [http://localhost:3000/tasks/modal/](http://localhost:3000/tasks/modal/)

### Loader
```react
<Loader isShown={false} loadingText="Loading" />
```
**Where:**
* isShown - flag which will show or hide loader
* loadingText - text placed bellow loader. In case if not defined, text should not be shown

Should be aviliable by link [http://localhost:3000/tasks/modal/](http://localhost:3000/tasks/loader/)

## Before developement
Probably you need some place where you can write your components. As easiest way I recommend you to [make a fork](https://help.github.com/articles/fork-a-repo/) from this repository and when components will be done, just make a [pull request](https://help.github.com/articles/using-pull-requests/) to this repository. And do not forget about Select component which you already have. You can look how it's defined and works. After you appliction started you can find Select component by link: [http://localhost:3000/tasks/select/](http://localhost:3000/tasks/select/)

