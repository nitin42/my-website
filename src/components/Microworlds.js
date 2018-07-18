import React from 'react'

import { Center } from './posts/Center'

const Microworlds = () => (
  <React.Fragment>
    <h1 className="post-title">Creating microworld</h1>
    <blockquote id="note-microworld" style={{ fontStyle: 'italic' }}>
      A growing place with built-in prerequisites, which involves the learner in
      a creative exploration.
    </blockquote>
    <p>
      This blog post is about how computational ideas can act as material for
      thinking about a system, creating an interactive learning environment
      which encourages a learner to explore and interact with the medium, and
      removing roadblocks in learning a system, by designing a microworld.
    </p>
    <h2 id="styled-heading">What is microworld ?</h2>
    <p id="start-para">
      A microworld is a growing place where the prerequisites are built-in for
      learning a system. A special place where certain ideas can be grown
      easily. A microworld when designed, facilitates powerful ideas and
      intellectual structures, thereby creating an interactive and explorable
      environment for a learner of the system.
    </p>
    <p>Real life examples of microworld includes:</p>
    <ul>
      <li>
        <a href="https://turtleacademy.com" target="_blank">
          Logo programming language
        </a>
      </li>
      <li>
        <a href="https://elements-of-physics.surge.sh" target="_blank">
          Elements of physics
        </a>{' '}
        - an interactive simulator which has all the prerequisites built into it
        for learning Newton's laws of motion.
      </li>
      <li>
        <a href="https://pudding.cool/2018/02/waveforms/" target="_blank">
          Waveforms
        </a>{' '}
        - an interactive guide which introduces and explores waveforms.
      </li>
    </ul>
    <h2 id="styled-heading">Why microworld ?</h2>
    <p id="start-para">
      A microworld encourages a learner to interact with the medium and explore
      it. Without a such powerful environment, a learner often founds roadblocks
      in the process of learning and is stuck in a n-step dictum about how to
      learn a system.
    </p>
    <h2 id="styled-heading">Analysing roadblocks</h2>
    <p id="start-para">
      To analyse the roadblocks in the process of learning, let's take an
      example of Newton's laws of motion. There exists some blocks when learning
      about laws of motion.
    </p>
    <ul>
      <li>
        <span id="term">Unresponsiveness</span> - Before learning about laws of
        motion, a learner doesn't know anything else like these laws. In order
        to be receptive, a learner needs to work with a very easy and accessible
        specimen of laws of motion.
      </li>
      <li>
        <span id="term">No footholds</span> - Laws of motion doesn't offer a
        stage for a learner who wants to manipulate them. After learning them, a
        learner cannot apply the laws and put them to use outside the schoolbook
        homework.
      </li>
      <li>
        <span id="term">Prerequisites</span> - Before learning about laws of
        motion, a learner is lost in perpetual state of learning prerequisites.
        A learner has to learn a number of different concepts before getting
        started, for example force and differential equations.
      </li>
    </ul>
    <h2 id="styled-heading">Designing microworld</h2>
    <p id="start-para">
      So we analysed some roadblocks in the process of learning a system. These
      results will now helps us in shaping the design criterias for the
      microworld. Below are some of the design criterias for creating a
      microworld.
    </p>
    <ul>
      <li>
        In order for learner to be receptive to a system, we need to create an
        accessible and easy to understand illustration about that system. That
        illustration may demonstrate an intuitive example about that system.
      </li>
      <li>
        Combining activities, games and art in such a way that the learner is
        able to manipulate the system and is involved in creative exploration.
      </li>
      <li>
        Integrate all the prerequisites required in the process of learning.
        This helps in preserving the aesthetic of the system and the learner is
        not lost in the perpetual state of learning.
      </li>
    </ul>
    <h2 id="styled-heading">Benefits</h2>
    <ul id="start-para">
      <li>
        Each new idea in microworld opens up new possibilities, and serves as a
        source of personal power.
      </li>
      <li>
        With the help of microworld, a learner is able to develop a sense of{' '}
        <i>owning the dynamics</i> of the system.
      </li>
      <li>
        Microworld helps a learner to develop a different kind of understanding
        - <i>a feel about why a system works as it does</i>.
      </li>
    </ul>
    <h2 id="styled-heading">Closure</h2>
    <p id="start-para">
      A microworld creates an intellectual environment which is less dominating
      and doesn't constrain the creativity of a learner. It addresses the
      problem arised due to unstructured process of learning and avoid forcing a
      learner into disassociated learning patterns. It lightens the cognitive
      load by resolving the problem of learning prerequisites. More importantly,
      microworld develops a context for building and exploring false theories.
      Yes, false theories! Our society forces us to hold deviant views about the
      objects and does not tolerate false theories. false theories, infact,
      serves as the natural path in the process of learning a system and leads a
      learner to new discoveries.
    </p>
    <p>I hope you enjoyed reading this blog post!</p>
  </React.Fragment>
)

export default Microworlds
