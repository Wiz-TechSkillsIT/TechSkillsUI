import React from 'react';

function ForumSection() {
  return (
    <div className="forum-container">
      <h2>Forum</h2>
      <form id="forumForm">
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForumSection;
