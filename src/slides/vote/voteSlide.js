import arrowButton from '../../components/arrowButton/arrowButton';

import './style.css';

export default async function voteRender(data) {
  const { selectedUserId, users } = data;

  const user1Info = await renderUserInfo(users[0]);
  const user2Info = await renderUserInfo(users[1], true, '👍');
  const user3Info = await renderUserInfo(users[2]);
  const user4Info = await renderUserInfo(users[3]);
  const user5Info = await renderUserInfo(users[4]);
  const user6Info = await renderUserInfo(users[5]);

  return (`
    <div class="vote">
      ${user1Info}
      ${user2Info}
      ${arrowButton({ direction: 'up' })}
      ${user3Info}
      ${user4Info}
      ${user5Info}
      ${arrowButton({ direction: 'down' })}
      ${user6Info}
    </div>
  `);
}

const renderUserInfo = async (user, isSelected = false, emoji = '') => {
  const { name, avatar } = user;
  const avatarImg = await import(`~images/2x/${avatar}`);
  const selectedClass = isSelected ? 'vote__user_selected' : '';
  return (`
    <div class="vote__user ${selectedClass}">
      <div class="vote__emoji">${emoji}</div>
      <img class="vote__avatar" src="${avatarImg.default}" alt="${name}">
      <div class="vote__name">${name}</div>
    </div>
  `);
}
