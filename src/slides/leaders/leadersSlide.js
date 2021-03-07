import './style.css';

/* Render _sorted_ list of leaders */
export default async function leadersRender(data) {
  const { emoji, users } = data;

  const user1Info = await renderUserInfo(users[0], emoji);
  const user2Info = await renderUserInfo(users[1]);
  const user3Info = await renderUserInfo(users[2]);
  const user4Info = await renderUserInfo(users[3]);
  const user5Info = await renderUserInfo(users[4]);

  return (`
    <div class="leaders">
      <div class="leaders__user leaders__user_place_5">
        ${user5Info}
        <div class="leaders__column">
          <div class="leaders__prize-place">5</div>
        </div>
      </div>
      <div class="leaders__user leaders__user_place_3">
        ${user3Info}
        <div class="leaders__column">
          <div class="leaders__prize-place">3</div>
        </div>
      </div>
      <div class="leaders__user leaders__user_place_1">
        ${user1Info}
        <div class="leaders__column leaders__column_winner">
          <div class="leaders__prize-place">1</div>
        </div>
      </div>
      <div class="leaders__user leaders__user_place_2">
        ${user2Info}
        <div class="leaders__column">
          <div class="leaders__prize-place">2</div>
        </div>
      </div>
      <div class="leaders__user leaders__user_place_4">
        ${user4Info}
        <div class="leaders__column">
          <div class="leaders__prize-place">4</div>
        </div>
      </div>
    </div>
  `);
}

const renderUserInfo = async (user, emoji = '') => {
  const { name, avatar, valueText } = user;
  const avatarImg = await import(`~images/2x/${avatar}`);

  return (`
    <div class="leaders__user-info">
      <div class="leaders__emoji leaders__emoji_winner">${emoji}</div>
      <img class="leaders__avatar" src="${avatarImg.default}" alt="${name}">
      <div class="leaders__name">${name}</div>
      <div class="leaders__commits">${valueText}</div>
    </div>
  `);
}
