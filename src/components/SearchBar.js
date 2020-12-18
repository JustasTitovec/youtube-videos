import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video search</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

// class SearchBar extends React.Component {
//   state = {
//     term: '',
//   };

//   onInputChange = (e) => {
//     this.setState({ term: e.target.value });
//   };

//   onFormSubmit = (e) => {
//     e.preventDefault();

//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video search</label>
//             <input
//               onChange={this.onInputChange}
//               value={this.state.term}
//               type="text"
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
