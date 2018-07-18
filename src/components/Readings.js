import React from 'react'

export default () => (
  <React.Fragment>
    <h1
      style={{
        fontSize: '1.8em',
        borderLeft: '8px solid black',
        paddingLeft: '10px',
      }}
    >
      Readings
    </h1>
    <p>
      So far, I've read these books, research papers and articles. Some of them
      had a great impact on my career, so I'll definitely recommend them to you.
    </p>
    <p>
      The ones with a &nbsp;<i className="fas fa-star" /> are extraordinary.
    </p>
    <ul id="books">
      <li>
        <a
          href="https://www.amazon.in/Envisioning-Information-Edward-R-Tufte/dp/0961392118"
          target="_blank"
        >
          Envisioning Information by{' '}
          <i>
            <span id="author-name">Edward Tufte</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://www.amazon.in/Inmates-Are-Running-Asylum-Products/dp/0672326140"
          target="_blank"
        >
          The Inmates Are Running the Asylum by{' '}
          <i>
            <span id="author-name">Alan Cooper</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://www.amazon.in/Design-Everyday-Things-Don-Norman/dp/0465050654/ref=sr_1_1?s=books&ie=UTF8&qid=1527095732&sr=1-1&keywords=design+of+everyday+things+by+donald+norman"
          target="_blank"
        >
          The Design of Everyday Things by{' '}
          <i>
            <span id="author-name">Don Norman</span>
          </i>
        </a>
      </li>
      <li>
        [In progress]&nbsp;
        <a href="http://www.craftinginterpreters.com/" target="_blank">
          Crafting Interpreters by{' '}
          <i>
            <span id="author-name">Bob Nystrom</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a href="http://gameprogrammingpatterns.com/" target="_blank">
          Game Programming Patterns by{' '}
          <i>
            <span id="author-name">Bob Nystrom</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://www.dreamsongs.com/Files/PatternsOfSoftware.pdf"
          target="_blank"
        >
          Patterns of Software by{' '}
          <i>
            <span id="author-name">Richard P. Gabriel</span>
          </i>
        </a>
      </li>
      <li>
        <a
          href="http://csis.pace.edu/~grossman/dcs/SoftwarePatterns_Coplien.pdf"
          target="_blank"
        >
          Software Patterns by{' '}
          <i>
            <span id="author-name">James O. Coplien</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"
          target="_blank"
        >
          Learning JavaScript Design Patterns by{' '}
          <i>
            <span id="author-name">Addy Osmani</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a href="https://eloquentjavascript.net/" target="_blank">
          Eloquent JavaScript by{' '}
          <i>
            <span id="author-name">Marijn Haverbeke</span>
          </i>
        </a>
      </li>
      <li>
        <a
          href="http://shop.oreilly.com/product/9780596517748.do"
          target="_blank"
        >
          JavaScript: The Good Parts by{' '}
          <i>
            <span id="author-name">Douglas Crockford</span>
          </i>
        </a>
      </li>
      <li>
        <a href="http://worrydream.com/MagicInk/" target="_blank">
          Magic Ink: Information Software And The Graphical Interface by{' '}
          <i>
            <span id="author-name">Bret Victor</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="http://worrydream.com/refs/Brooks-NoSilverBullet.pdf"
          target="_blank"
        >
          No Silver Bullet: Essence and Accident in Software Engineering by{' '}
          <i>
            <span id="author-name">Frederick P. Brooks</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        [In Progress]&nbsp;
        <a href="http://natureofcode.com/" target="_blank">
          The Nature of Code by{' '}
          <i>
            <span id="author-name">Daniel Shiffman</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        &nbsp;
        <a
          href="http://worrydream.com/refs/Papert%20-%20Mindstorms%201st%20ed.pdf"
          target="_blank"
        >
          Mindstorms by{' '}
          <i>
            <span id="author-name">Seymour Papert</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html"
          target="_blank"
        >
          Design principles behind Smalltalk by{' '}
          <i>
            <span id="author-name">Daniel H. H. Ingalls</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a href="http://worrydream.com/LearnableProgramming/" target="_blank">
          Learnable Programming by{' '}
          <i>
            <span id="author-name">Bret Victor</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a
          href="https://www.facebook.com/notes/kent-beck/one-bite-at-a-time-partitioning-complexity/1716882961677894/"
          target="_blank"
        >
          One Bite At A Time: Partitioning Complexity by{' '}
          <i>
            <span id="author-name">Kent Beck</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
      <li>
        <a href="http://worrydream.com/LadderOfAbstraction/" target="_blank">
          Up and Down the Ladder of Abstraction by{' '}
          <i>
            <span id="author-name">Bret Victor</span>
          </i>
        </a>
        &nbsp;<i className="fas fa-star" />
      </li>
    </ul>
  </React.Fragment>
)
