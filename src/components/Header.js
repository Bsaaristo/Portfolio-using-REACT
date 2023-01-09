import react from 'react';

class Header extends react.Component {
    render() {
      return (
            <header id="header" className="alt">
            <h1>My Portfolio</h1>
            <h2>Brian Saaristo</h2>
            <p>
                Self-driven, Quick learner, Passionate programmer with a curious mind who enjoys solving complex and
                challenging real-world problems.
                <br />
            </p>
            <h3>
                To see my code at a glance click or tap{' '}
                <a href="https://github.com/Bsaaristo">
                <strong>HERE</strong>
                </a>
                !
            </h3>
            </header>
      );
    }
  }
export default Header;