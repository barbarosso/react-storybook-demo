import React from 'react';
import Modal from '../modal/Modal';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Modal', module)
  .add('simple modal with nothing else and no visible state', () => (
    <Modal>
    
    </Modal>
  ))
  
  .add('simple modal with visibile true and nothing else', () => (
    <Modal visible>
    </Modal>
  ))

  .add('simple modal with only a title', () => (
    <Modal visible title="This is our title">
    </Modal>
  ))

  .add('simple modal with only a body', () => (
    <Modal visible
      body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
    </Modal>
  ))

  .add('simple modal with title and body', () => (
    <Modal visible
      title="Dit is de titel"
      body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.">
    </Modal>
  ))

  .add('simple modal with given html content', () => (
    <Modal visible hex='FF0000'>
      {getHtmlContentForModal()}
    </Modal>
  ))

    .add('simple modal with backgroundAlpha of 0.1', () => (
      <Modal visible backgroundAlpha={0.1} >
        <p> has got background alpha of 0.1</p>
      </Modal>
    ))

     .add('simple modal with backgroundAlpha of 0.1', () => (
        <Modal visible backgroundAlpha={0.1} >
         {getHtmlContentForModal()}
        </Modal>
    ))

     .add('simple modal with backgroundColor 00FFFF', () => (
        <Modal visible backgroundColor="0000FF">
         {getHtmlContentForModal()}
        </Modal>
    ))


     .add('simple modal with backgroundColor FF0000 and backgroundALpha of 1', () => (
        <Modal visible backgroundAlpha={1} backgroundColor="FF0000">
          <p> has got background alpha of 1 and background color FF0000</p>
        </Modal>
    ))

     .add('simple modal with only ok handler', () => (
        <Modal visible okHandler={ action('ok-handler') }>
          <p> with only ok handler</p>
        </Modal>
    ))

    .add('simple modal with only cancel handler', () => (
        <Modal visible cancelHandler={ action('cancel-handler') }>
          <p> with only cancel handler</p>
        </Modal>
    ))

    .add('simple modal with ok and  cancel handler', () => (
        <Modal visible 
            okHandler={ action('ok-handler')}
            cancelHandler={ action('cancel-handler') }
            >
          <p> with ok and cancel handler</p>
        </Modal>
    ))


  const getHtmlContentForModal = () =>{
    return (
      <div>
        <h1>Hello world!</h1>
        <p>Demonstrating how a modal window could look when Flexbox is involved. tl;dr = super easy.</p>
        <p>And now, for some useless text!</p>
        <p class="dummy">Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
      </div>
    )
}