/* Hand-authored, topic-specific SVG diagrams. No generated or external images. */
(() => {
  const filename = location.pathname.split('/').pop();
  const palettes = {
    'tan-binh-lang-game.html': ['#fff2eb', '#b94b29', '#ef8558'],
    'nha-phat-trien-game.html': ['#eef3ff', '#3154a5', '#5f82d8'],
    'frontend-developer.html': ['#f6efff', '#7846a8', '#b176ce'],
    'backend-developer.html': ['#eaf7f8', '#216e7c', '#44a9b2'],
    'nha-sang-tao-mo-hinh.html': ['#fff5e9', '#a76523', '#e7a34b'],
    'thiet-ke-co-khi-che-tao-may.html': ['#ebf8fa', '#25758c', '#4baac0'],
    'nha-thiet-ke-sang-tao.html': ['#fff0f6', '#a33f73', '#df76a8']
  };
  const palette = palettes[filename];
  if (!palette) return;

  const r = (x, y, w, h, fill, radius = 5, stroke = 'none') =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
  const c = (x, y, radius, fill, stroke = 'none', sw = 2) =>
    `<circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
  const l = (x1, y1, x2, y2, stroke = '#536079', sw = 3, dash = '') =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ''}/>`;
  const p = (d, fill, stroke = 'none', sw = 3) =>
    `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const t = (x, y, value, size = 14, fill = '#26324c', weight = 700) =>
    `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-family="Arial,sans-serif" font-weight="${weight}">${value}</text>`;
  const frame = (inside, heading = '') =>
    r(300, 19, 270, 143, '#fff', 12, '#d9e2ef') +
    r(300, 19, 270, 23, '#eef2f8', 12) +
    c(315, 31, 3, '#ee7e7e') + c(326, 31, 3, '#eab65a') + c(337, 31, 3, '#62bfab') +
    (heading ? t(459, 35, heading, 10, '#728097') : '') + inside;
  const tile = (x, y, color, label = '') =>
    r(x, y, 45, 36, color, 6) + (label ? t(x + 8, y + 23, label, 11, '#fff') : '');
  const node = (x, y, label, color = '#dce8f7') =>
    r(x, y, 68, 30, color, 7) + t(x + 10, y + 20, label, 11);
  const appIcon = (app, color) => {
    const name = app.toLowerCase();
    if (name.includes('figma')) return c(29, 71, 7, '#ef7569') + c(43, 71, 7, '#efa967') +
      c(29, 85, 7, '#9b68c7') + c(43, 85, 7, '#75c2af') + c(29, 99, 7, '#638bd0');
    if (name.includes('roblox')) return p('M35 65l16 16-16 16-16-16z', color) +
      p('M35 76l5 5-5 5-5-5z', '#fff');
    if (name.includes('ev3')) return r(19, 68, 34, 28, color, 6) +
      c(29, 79, 4, '#fff') + c(43, 79, 4, '#fff') + l(25, 91, 47, 91, '#fff', 2);
    if (name.includes('miniworld') || name.includes('maker') || name.includes('tinkercad'))
      return p('M35 64l17 10v20l-17 10-17-10V74z', color) +
        p('M35 64v20l17-10M35 84L18 74M35 84v20', 'none', '#fff', 2);
    if (name.includes('sql')) return p('M19 70q0-9 17-9t17 9v27q0 9-17 9t-17-9z', color) +
      p('M19 70q0 9 17 9t17-9M19 88q0 9 17 9t17-9', 'none', '#fff', 2);
    if (name.includes('angular')) return p('M35 61l20 8-3 28-17 11-17-11-3-28z', '#b75575') +
      t(28, 95, 'A', 24, '#fff');
    if (name.includes('photoshop')) return r(18, 62, 35, 42, '#234e83', 5) + t(23, 89, 'Ps', 19, '#b8defa');
    if (name.includes('javascript') || name.includes('fetch')) return r(18, 62, 35, 42, '#e8be4f', 5) +
      t(23, 90, name.includes('fetch') ? 'API' : 'JS', name.includes('fetch') ? 13 : 19, '#2a3346');
    if (name.includes('html') || name.includes('bootstrap')) return r(18, 62, 35, 42, color, 5) +
      t(23, 90, name.includes('bootstrap') ? 'B' : '&lt;/&gt;', name.includes('bootstrap') ? 22 : 15, '#fff');
    if (name.includes('python') || name.includes('pygame')) return c(35, 82, 22, '#f4ca58') +
      t(25, 89, 'Py', 18, '#355878');
    if (name.includes('django')) return r(18, 62, 35, 42, '#36836b', 5) + t(27, 90, 'D', 21, '#fff');
    if (name.includes('tynker')) return r(18, 62, 35, 42, '#ec8b58', 5) +
      r(29, 68, 13, 11, '#fff', 3) + r(24, 84, 23, 12, '#fff', 3);
    return r(18, 62, 35, 42, color, 5) + t(23, 89, 'ST', 17, '#fff');
  };

  const context = {
    'tan-binh-lang-game.html': [
      ['Tynker', 'Game 2D bằng khối lệnh'],
      ['Tynker', 'Bản đồ game nhiều cấp độ'],
      ['Tynker', 'Platformer và lực hấp dẫn'],
      ['Miniworld', 'Thế giới khối 3D'],
      ['Miniworld', 'Nhiệm vụ nhập vai']
    ],
    'nha-phat-trien-game.html': [
      ['Roblox Studio', 'Game Parkour 3D'],
      ['Roblox Studio', 'Đảo truy tìm kho báu'],
      ['Roblox Studio', 'Game Fun Run'],
      ['Roblox + Lua', 'Game bắn phi thuyền'],
      ['Roblox Studio', 'Game đua xe'],
      ['Roblox Studio', 'Game sinh tồn']
    ],
    'frontend-developer.html': [
      ['Figma', 'Bộ thiết kế UI/UX'],
      ['HTML + CSS', 'Website responsive'],
      ['HTML5 + CSS3', 'Trang web chuẩn SEO'],
      ['Bootstrap', 'Website tin tức'],
      ['JavaScript', 'Giao diện tương tác'],
      ['JavaScript ES6+', 'Luồng xử lý bất đồng bộ'],
      ['Fetch API', 'Ứng dụng dữ liệu động'],
      ['Angular', 'Ứng dụng component'],
      ['Angular + RxJS', 'Ứng dụng nhiều trang'],
      ['Angular', 'Xác thực và triển khai']
    ],
    'backend-developer.html': [
      ['Python', 'Chương trình đầu tiên'],
      ['Python', 'Xử lý và trực quan dữ liệu'],
      ['Python Turtle', 'Hình vẽ và mini game'],
      ['Python Tkinter', 'Ứng dụng desktop'],
      ['PyGame', 'Game 2D'],
      ['SQL / NoSQL', 'Cơ sở dữ liệu'],
      ['Django', 'Website cá nhân'],
      ['Django ORM', 'CMS và bảo mật'],
      ['Django', 'Người dùng và hiệu suất'],
      ['Django', 'Website bán hàng'],
      ['Django REST', 'API cho ứng dụng']
    ],
    'nha-sang-tao-mo-hinh.html': [
      ['Maker Empire', 'Mô hình 3D'],
      ['Maker Empire', 'Cơ cấu chuyển động'],
      ['TinkerCAD', 'Mô hình vũ trụ']
    ],
    'thiet-ke-co-khi-che-tao-may.html': [
      ['LEGO EV3', 'Robot lắp ráp'],
      ['LEGO EV3', 'Robot vượt chướng ngại']
    ],
    'nha-thiet-ke-sang-tao.html': [
      ['Photoshop', 'Ấn phẩm cơ bản'],
      ['Photoshop', 'Chỉnh sửa ảnh'],
      ['Photoshop', 'Đồ họa truyền thông'],
      ['Photoshop', 'Tranh nghệ thuật số']
    ]
  };

  // Game courses use full-width, product-like lesson scenes instead of generic diagrams.
  const tynkerUi = (inside, label) =>
    r(0, 0, 600, 180, '#f7f8fc', 0) + r(0, 0, 600, 26, '#354363', 0) +
    t(14, 18, 'TYNKER', 12, '#fff') + t(476, 18, label, 11, '#d8e2f5') +
    r(7, 33, 150, 140, '#e9edf7') +
    r(17, 43, 129, 17, '#ef9d57') + r(28, 64, 113, 17, '#66a9d6') +
    r(28, 85, 108, 17, '#75be88') + r(17, 108, 124, 17, '#b28ad3') +
    r(28, 129, 95, 17, '#efc269') +
    r(166, 33, 427, 140, '#c7e8fa') + inside;
  const miniUi = (inside, label) =>
    r(0, 0, 600, 180, '#b9dcf1', 0) + r(0, 0, 600, 26, '#3e654e', 0) +
    t(13, 18, 'MINIWORLD', 12, '#fff') + t(477, 18, label, 11, '#d9f5d9') +
    inside + r(191, 153, 218, 22, '#263d3e', 5) +
    [0, 1, 2, 3, 4, 5, 6].map(i => r(198 + i * 30, 157, 24, 14, i === 2 ? '#e2b46c' : '#779786', 3)).join('');
  const robloxUi = (inside, label) =>
    r(0, 0, 600, 180, '#f4f7fb', 0) + r(0, 0, 600, 26, '#e3eaf4', 0) +
    p('M17 7l13 5-5 13-13-5z', '#3968bc') + t(39, 18, 'ROBLOX STUDIO', 12, '#263b5e') +
    t(355, 18, label, 10, '#486897') + r(8, 32, 480, 140, '#b8d7ef') +
    r(496, 32, 96, 140, '#fff', 1, '#d6e0eb') + t(505, 49, 'EXPLORER', 10, '#596a84') +
    [0, 1, 2, 3].map(i => r(506, 58 + i * 23, 69 - i * 7, 7, i === 1 ? '#9bbadf' : '#dce5ee', 2)).join('') + inside;
  const gameScreens = {
    'tan-binh-lang-game.html': [
      tynkerUi(r(166, 139, 427, 34, '#79bd69', 0) +
        r(220, 104, 41, 36, '#f09a4d') + c(232, 112, 3, '#263e55') +
        c(249, 112, 3, '#263e55') + c(351, 85, 12, '#ffcc57') +
        c(415, 85, 12, '#ffcc57') + p('M506 139l22-39 22 39z', '#dc6d67') +
        t(304, 60, 'GAME 2D', 19, '#34546f'), 'BLOCK CODING'),
      tynkerUi(Array.from({length: 9}, (_, i) => l(174 + i * 47, 36, 174 + i * 47, 165, '#a9d1e8', 1)).join('') +
        Array.from({length: 4}, (_, i) => l(170, 51 + i * 36, 591, 51 + i * 36, '#a9d1e8', 1)).join('') +
        r(177, 142, 411, 27, '#82b874', 0) + c(220, 128, 13, '#ed8e65') +
        p('M225 124l138-41 116 25', 'none', '#e47753', 4) + c(365, 83, 8, '#f6c552') +
        t(487, 53, 'LEVEL 2', 14, '#315874'), 'X / Y + LEVEL'),
      tynkerUi(r(180, 145, 110, 18, '#5886a3') + r(364, 114, 110, 18, '#5886a3') +
        r(526, 91, 58, 18, '#5886a3') + c(232, 110, 15, '#ed916d') +
        p('M247 104q80-101 150-4', 'none', '#db745b', 4) +
        p('M383 88l15 13-20 2', 'none', '#db745b', 4) +
        l(232, 125, 232, 145, '#395b81', 3, '4 4') + t(295, 58, 'GRAVITY + COLLISION', 14, '#34546f'), 'PLATFORMER'),
      miniUi(r(0, 111, 600, 69, '#9bbd77', 0) +
        p('M43 125l118-63 119 63-119 55z', '#8ec77b') +
        p('M43 125v41l118 50v-91z', '#c79d70') +
        p('M280 125v41l-119 50v-91z', '#ab835d') +
        p('M310 101l68-35 63 35-66 34z', '#ebc386') +
        p('M310 101v48l65 32v-46z', '#bf8d62') +
        p('M441 101v48l-66 32v-46z', '#a77451') +
        r(496, 98, 20, 60, '#5a945d') + c(506, 85, 34, '#75b371') +
        r(353, 119, 25, 29, '#765e4c'), 'BUILD + TRIGGER'),
      miniUi(r(0, 97, 600, 83, '#88ad72', 0) +
        p('M92 107l82-42 80 42-80 38z', '#d2b487') +
        p('M92 107v47l82 32v-41z', '#aa8765') +
        p('M254 107v47l-80 32v-41z', '#8c6e52') +
        r(312, 95, 34, 50, '#5e82b0') + c(329, 84, 17, '#edbb8d') +
        r(405, 96, 30, 47, '#ae745a') + c(420, 86, 15, '#e6b889') +
        r(369, 43, 149, 36, '#fff', 8) + t(381, 58, 'NPC: NEW QUEST!', 11, '#334b6b') +
        r(19, 39, 103, 12, '#61373d') + r(19, 39, 75, 12, '#df6563') +
        t(23, 70, 'HP', 12, '#fff'), 'NPC + QUEST')
    ],
    'nha-phat-trien-game.html': [
      robloxUi(r(8, 135, 480, 37, '#78b870', 0) +
        p('M36 127l60-31 52 29-57 29z', '#ef9a75') +
        p('M158 107l61-33 53 30-59 31z', '#e5c581') +
        p('M288 87l59-33 54 31-61 30z', '#93b6e4') +
        p('M414 72l55-29 21 12v31l-23 16z', '#bd9bd6') +
        c(72, 116, 10, '#3775be') + r(399, 42, 43, 10, '#55a9a0') +
        t(30, 53, 'OBBY + CHECKPOINT', 13, '#315d79'), 'PARKOUR 3D'),
      robloxUi(r(8, 32, 480, 140, '#9bd2ec') +
        p('M20 150q104-96 196-34t265-45v101H20z', '#77b67c') +
        p('M70 129q70-55 133-19t126 2', 'none', '#e6c688', 14) +
        r(344, 99, 38, 29, '#bc8b58') + r(344, 93, 38, 9, '#8c653f') +
        r(27, 42, 84, 43, '#fff', 5) + t(39, 60, 'MAP', 11, '#3b6396') +
        p('M42 72l23-14 29 12', 'none', '#7cb499', 4), 'TERRAIN + GUI'),
      robloxUi(r(8, 32, 480, 140, '#c5d9f8') + r(8, 143, 480, 29, '#9fc07e', 0) +
        p('M36 144l70-74 60 74M179 144l89-91 88 91', 'none', '#91a6ce', 15) +
        c(146, 113, 14, '#efac88') + r(132, 127, 28, 24, '#527ebe') +
        [0,1,2,3,4].map(i => c(208 + i * 42, 70 + (i % 2) * 26, 6, '#ffd46f')).join('') +
        p('M164 113l67-12', 'none', '#fff', 4) +
        r(31, 154, 170, 8, '#476baf') + t(232, 159, 'ANIMATION TIMELINE', 10, '#34546f'), 'FUN RUN'),
      robloxUi(r(8, 32, 480, 140, '#263e71') +
        c(108, 69, 13, '#dae6fa') + c(421, 121, 19, '#657c9c') +
        p('M233 60l25 42 61 14-61 14-25 37-23-37-61-14 61-14z', '#80c9e7', '#4a93b6') +
        c(234, 116, 15, '#f3c06b') + p('M154 115l-58-9M319 115l69-9', 'none', '#f27672', 6) +
        r(19, 43, 107, 31, '#fff', 5) + t(27, 62, 'RemoteEvent', 10, '#3a628f'), 'CLIENT / SERVER'),
      robloxUi(r(8, 32, 480, 140, '#a5c9e5') +
        p('M29 160q112-100 218-60t224-25', 'none', '#688393', 43) +
        p('M29 160q112-100 218-60t224-25', 'none', '#e9eef1', 29) +
        p('M135 115l57-20 29 20-57 24z', '#e96f61') +
        c(160, 137, 9, '#283e5c') + c(204, 121, 9, '#283e5c') +
        c(434, 64, 29, '#fff') + t(421, 69, '98', 17, '#315a83') +
        r(23, 47, 59, 17, '#f4c25d') + t(29, 60, 'LAP 2', 10), 'RACING + PHYSICS'),
      robloxUi(r(8, 32, 480, 140, '#b7d2dc') +
        p('M8 147l73-59 49 27 66-62 66 65 45-42 74 71 107-59v84H8z', '#6da278') +
        p('M87 137l47-33 44 33v33H87z', '#b7906b') +
        r(115, 144, 18, 27, '#685044') +
        c(325, 117, 12, '#e6b58e') + r(311, 130, 28, 31, '#4a7899') +
        c(418, 130, 10, '#91b398') + r(407, 140, 22, 30, '#547a64') +
        r(25, 42, 100, 10, '#563a45') + r(25, 42, 67, 10, '#df6864') +
        r(333, 152, 115, 15, '#263e51', 4) +
        [0,1,2].map(i => r(341 + i * 34, 155, 27, 10, '#afbb87', 2)).join(''), 'SURVIVAL + INVENTORY')
    ]
  };

  const art = {
    'tan-binh-lang-game.html': [
      // 01: first 2D game
      frame(r(314, 51, 80, 92, '#e6edf9') +
        r(319, 59, 69, 15, '#ee9d61') + r(324, 81, 63, 15, '#67a6cf') +
        r(319, 103, 70, 15, '#82bc79') + r(401, 51, 153, 92, '#b9e4ff') +
        r(401, 120, 153, 24, '#78b967', 1) + r(416, 99, 28, 21, '#ef9b55') +
        c(475, 78, 9, '#ffd85b') + c(514, 78, 9, '#ffd85b') +
        p('M526 120l13-25 13 25', '#eb6d72'), 'BLOCKS + GAME'),
      // 02: coordinates and levels
      frame(Array.from({length: 7}, (_, i) => l(321 + i * 34, 50, 321 + i * 34, 145, '#dce7f2', 1)).join('') +
        Array.from({length: 4}, (_, i) => l(321, 55 + i * 30, 551, 55 + i * 30, '#dce7f2', 1)).join('') +
        p('M333 126h72V94h66V63h65', 'none', '#f08a4f', 8) + c(333, 126, 8, '#5b8fd8') + c(536, 63, 10, '#f5bf4d') + t(480, 142, 'LEVEL 2', 10), 'X / Y'),
      // 03: platformer physics
      frame(r(316, 123, 70, 14, '#658db8') + r(450, 105, 92, 14, '#658db8') + c(365, 93, 13, '#ef9158') +
        p('M377 88q34-55 84 4', 'none', '#ed7b59', 3) + p('M446 85l14 8-16 4', 'none', '#ed7b59', 3) +
        l(365, 107, 365, 129, '#5f8bba', 2, '4 4') + t(318, 68, 'JUMP + GRAVITY', 12), 'PHYSICS'),
      // 04: block world
      p('M323 91l77-38 77 38-77 38z', '#a9d68a', '#75aa69') + p('M323 91v52l77 34v-48z', '#d6ae83') +
        p('M477 91v52l-77 34v-48z', '#b89067') + p('M434 74l26-13 24 13-26 13z', '#e8a36e') +
        p('M434 74v27l24 12V87z', '#cd8255') + p('M484 74v27l-26 12V87z', '#b76e43') +
        r(503, 84, 17, 58, '#6dab68', 3) + c(511, 75, 24, '#78bd76'),
      // 05: role-playing adventure
      frame(p('M321 130q55-89 118-45t112 0', 'none', '#d2bd8c', 13) + p('M321 130q55-89 118-45t112 0', 'none', '#f6e9c8', 8) +
        c(338, 120, 12, '#5e85cb') + p('M442 77l11-15 11 15-11 19z', '#a679d9') +
        r(514, 61, 33, 24, '#d29650', 3) + r(514, 59, 33, 7, '#a86d38', 2) +
        t(378, 143, 'QUEST PATH', 11), 'RPG MAP')
    ],
    'nha-phat-trien-game.html': [
      p('M315 128l70-39 65 37-69 40z', '#84b88d') + p('M370 98l40-29 34 21-42 27z', '#d6bd8f') +
        p('M423 90l28-25 25 17-27 26z', '#e9a47a') + p('M473 82l35-26 29 19-36 27z', '#a4cde2') +
        c(331, 112, 9, '#ed8067') + t(303, 45, 'PARKOUR', 13),
      frame(p('M317 130q37-53 72-32t87-24 65-14', 'none', '#d9b278', 12) +
        p('M317 130q37-53 72-32t87-24 65-14', 'none', '#fff4cd', 6) +
        p('M490 88l20-21 20 21-20 20z', '#d9a54f') + t(332, 67, 'TERRAIN', 12) + c(398, 86, 8, '#5c83bc'), 'MAP + GUI'),
      frame(r(316, 102, 235, 29, '#b0dba0') + c(350, 83, 13, '#ee9174') +
        p('M364 76l50-21 47 21', 'none', '#ffcc6c', 4) +
        Array.from({length: 5}, (_, i) => c(430 + i * 22, 72 + (i % 2) * 18, 5, '#ffd774')).join('') +
        r(323, 136, 96, 9, '#4f9bc5'), 'FUN RUN'),
      p('M428 64l16 29 58 13-58 12-16 26-15-26-57-12 57-13z', '#8bc5e5', '#4974ae') +
        c(428, 104, 13, '#f2b263') + p('M355 107l-29-8 29-8M502 106l32-8-32-8', 'none', '#ef7d6a', 5) +
        c(535, 60, 12, '#d6dce9') + c(320, 56, 7, '#d6dce9') + t(345, 157, 'CLIENT ↔ SERVER', 11),
      p('M316 131q46-48 104-23t125-33', 'none', '#9ba7b6', 32) +
        p('M316 131q46-48 104-23t125-33', 'none', '#e9eef1', 23) +
        p('M334 125l47-15 18 15-49 17z', '#e67865') + c(351, 140, 8, '#303b54') + c(383, 130, 8, '#303b54') +
        t(464, 135, 'SPEED', 11),
      frame(r(319, 54, 225, 92, '#dcebd9') + p('M324 132l39-44 32 15 34-33 45 26 40-25 30 61z', '#80b879') +
        r(335, 87, 28, 28, '#b78562') + p('M334 87l15-15 16 15z', '#795741') +
        r(484, 108, 44, 27, '#edba72') + t(421, 58, 'DAY 03', 10), 'SURVIVAL')
    ],
    'frontend-developer.html': [
      frame(r(317, 54, 100, 85, '#ede4f6') + r(427, 54, 110, 15, '#ad83cf') +
        r(427, 77, 75, 10, '#d7c7e5') + r(427, 96, 103, 10, '#d7c7e5') +
        r(427, 116, 53, 20, '#d77eac') + c(336, 71, 8, '#efa5aa') + t(325, 131, 'UI KIT', 11), 'FIGMA'),
      r(312, 53, 143, 90, '#fff', 7, '#aebfd4') + r(312, 53, 143, 15, '#b68cd1') +
        r(325, 80, 54, 48, '#e8d8f4') + r(386, 81, 54, 8, '#ba92d5') +
        r(470, 69, 65, 100, '#fff', 8, '#9fb3ca') + r(478, 83, 49, 17, '#b68cd1') +
        r(478, 108, 49, 31, '#e8d8f4') + t(323, 159, 'DESKTOP + MOBILE', 10),
      frame(Array.from({length: 4}, (_, i) => r(316 + (i % 2) * 116, 53 + Math.floor(i / 2) * 45, 103, 37, ['#d9c8ec','#eddaec','#d4e3f2','#e4dff4'][i])).join('') +
        t(339, 77, 'GRID', 11) + t(455, 122, 'SEO', 11) + c(529, 61, 12, 'none', '#905ea9') +
        l(538, 70, 549, 82, '#905ea9'), 'LAYOUT'),
      frame(r(317, 56, 70, 35, '#d5c6eb') + r(396, 56, 70, 35, '#d5c6eb') +
        r(475, 56, 70, 35, '#d5c6eb') + r(317, 104, 228, 31, '#f3e1ed') +
        r(335, 112, 60, 15, '#b67bcb') + r(480, 112, 52, 15, '#d880a9'), 'BOOTSTRAP'),
      frame(r(318, 54, 102, 74, '#e8dcf4') + r(331, 69, 76, 22, '#b783d0') +
        p('M432 120l-5-30 21 18-11 2z', '#334d70') + p('M440 113l13 15', 'none', '#334d70', 3) +
        r(462, 75, 76, 22, '#e496bb') + t(472, 90, 'CLICK', 10, '#fff'), 'DOM EVENT'),
      frame(node(318, 64, 'START', '#dfd0ef') + node(413, 64, 'FETCH', '#e4d4ee') +
        node(413, 113, 'RESULT', '#f3dce9') + l(386, 79, 410, 79, '#a36dbd') +
        p('M447 94v16', 'none', '#a36dbd') + t(323, 141, 'ASYNC FLOW', 10), 'JS ES6+'),
      frame(r(318, 58, 90, 68, '#cfe4f4') + c(363, 80, 15, '#f5d06f') +
        p('M340 110q25-23 49 0', 'none', '#fff', 8) + node(457, 55, 'WEATHER', '#eee0f5') +
        node(457, 107, 'NEWS', '#eee0f5') + l(409, 91, 454, 70, '#8e73b6') +
        l(409, 91, 454, 121, '#8e73b6'), 'API DATA'),
      frame(r(318, 55, 101, 78, '#e7ddf2') + tile(328, 65, '#9e72c2', 'APP') +
        tile(328, 105, '#c595d6', 'UI') + node(461, 61, 'INPUT', '#ebdef2') +
        node(461, 108, 'OUTPUT', '#ebdef2') + l(420, 91, 456, 91, '#a47aba'), 'ANGULAR'),
      frame(node(318, 59, 'ROUTER', '#d9d2ed') + node(462, 55, 'PAGE A', '#eddcf2') +
        node(462, 107, 'PAGE B', '#eddcf2') + l(387, 75, 457, 71, '#a278ba') +
        l(387, 75, 457, 123, '#a278ba') + r(328, 114, 57, 22, '#b291cd'), 'RXJS + STATE'),
      frame(r(321, 55, 139, 82, '#ede2f3') + r(333, 70, 114, 13, '#cba5dc') +
        r(333, 92, 114, 13, '#d9c5e7') + r(333, 117, 62, 15, '#a272c0') +
        p('M506 57l31 11v26q-1 26-31 42-30-16-31-42V68z', '#e69abb') +
        p('M492 94l10 10 20-22', 'none', '#fff', 5), 'AUTH + CLOUD')
    ],
    'backend-developer.html': [
      frame(r(316, 53, 238, 89, '#263b54') + t(329, 77, 'x = 10', 13, '#86d4e5') +
        t(329, 101, 'for item in data:', 12, '#e6c66c') + t(345, 124, 'print(item)', 12, '#fff'), 'PYTHON'),
      frame(r(316, 55, 99, 70, '#d8eef1') + [44,65,34,80].map((h,i)=>r(427+i*29, 129-h, 18, h, '#5caeb9')).join('') +
        l(427, 130, 551, 130, '#5c728b') + t(324, 94, 'CSV', 18), 'DATA'),
      frame(p('M333 114q49-93 94 0t98 0', 'none', '#64afbd', 3) +
        p('M335 110q42 63 96-4t92 0', 'none', '#e59e74', 3) +
        c(427, 114, 9, '#397f8e') + t(318, 68, 'TURTLE', 12), 'DRAW'),
      frame(node(317, 64, 'CLASS', '#d2e9ee') + node(460, 57, 'OBJECT', '#c5e4e8') +
        node(460, 108, 'WINDOW', '#c5e4e8') + l(386, 78, 455, 73, '#5a9eab') +
        l(386, 78, 455, 123, '#5a9eab'), 'OOP + GUI'),
      frame(r(316, 55, 236, 80, '#d5ecf2') + r(316, 118, 236, 19, '#7bb891') +
        r(343, 99, 19, 19, '#ef955e') + r(430, 87, 42, 12, '#558eb3') +
        c(494, 75, 8, '#f4c65c') + c(524, 75, 8, '#f4c65c'), 'PYGAME'),
      frame(r(320, 55, 103, 72, '#e5f3f4') +
        [0,1,2].map(i=>r(328, 65+i*19, 87, 12, i%2?'#bddde2':'#9ccdd4')).join('') +
        p('M463 70q0-18 35-18t35 18v52q0 17-35 17t-35-17z', '#86bdc8') +
        p('M463 70q0 18 35 18t35-18M463 95q0 18 35 18t35-18', 'none', '#e7f5f6', 2), 'SQL + NOSQL'),
      frame(r(317, 57, 225, 18, '#6aafba') + r(317, 86, 88, 47, '#d7ebee') +
        r(417, 86, 125, 11, '#a4d1d6') + r(417, 106, 99, 8, '#d2e7e9') +
        r(417, 121, 61, 13, '#69adba'), 'DJANGO WEB'),
      frame(r(319, 55, 102, 82, '#d9eff0') + [0,1,2].map(i=>r(327, 64+i*23, 85, 15, '#a4cfd4')).join('') +
        r(439, 55, 103, 82, '#e7f1f2') + c(493, 88, 20, '#75b4bd') +
        p('M483 88l7 7 16-17', 'none', '#fff', 4), 'ORM + CMS'),
      frame(r(320, 54, 97, 83, '#d9ecee') + c(368, 81, 15, '#76b2bd') +
        p('M342 121q0-29 26-29t26 29', '#76b2bd') +
        [23,39,30,53].map((h,i)=>r(439+i*26, 131-h, 15, h, '#65aab6')).join(''), 'USERS + SPEED'),
      frame([0,1,2].map(i=>r(317+i*77, 57, 65, 70, '#e2f0f1') +
        r(326+i*77, 65, 47, 38, ['#b9d9dd','#d9c8aa','#a9ced5'][i]) +
        r(326+i*77, 110, 35, 8, '#80b8bf')).join('') +
        c(547, 125, 16, '#65a9b6') + p('M539 122h18l-3 10h-12z', '#fff'), 'E-COMMERCE'),
      frame(node(320, 58, 'GET', '#c4e9df') + node(414, 58, 'POST', '#f4dbc4') +
        node(320, 107, 'PUT', '#dce3f1') + node(414, 107, 'DELETE', '#f2d9df') +
        r(510, 76, 31, 38, '#6db1bc') + t(515, 100, '{}', 14, '#fff'), 'REST API')
    ],
    'nha-sang-tao-mo-hinh.html': [
      p('M335 94l60-34 59 34-59 35z', '#eed197', '#b78f57') +
        p('M335 94v40l60 34v-39z', '#d9a866') + p('M454 94v40l-59 34v-39z', '#bd874d') +
        p('M473 74l29-17 29 17-29 17z', '#96c5d3') + p('M473 74v37l29 17V91z', '#70a9b8') +
        p('M531 74v37l-29 17V91z', '#508a9c') + t(319, 44, '3D SHAPES', 12),
      c(370, 103, 37, '#f0d6a3', '#bb9052', 7) + c(370, 103, 15, '#fff', '#bb9052', 5) +
        c(469, 103, 27, '#b8d4df', '#6c9cae', 6) + c(469, 103, 9, '#fff', '#6c9cae', 4) +
        p('M398 85l43 10M398 121l43-9', 'none', '#816e5b', 8) +
        t(316, 49, 'GEARS + LINKAGE', 12),
      c(434, 96, 27, '#f5c866') + p('M319 99q118-92 239 0', 'none', '#a3b9d4', 2) +
        p('M319 100q118 92 239 0', 'none', '#a3b9d4', 2) +
        c(354, 76, 10, '#6f9ccc') + c(500, 129, 12, '#d98d7f') +
        c(542, 82, 7, '#a0b68a') + t(319, 45, 'TINKERCAD + SPACE', 11)
    ],
    'thiet-ke-co-khi-che-tao-may.html': [
      r(363, 69, 111, 61, '#d6ebee', 11, '#72aeb7') + r(378, 81, 81, 34, '#43869a') +
        c(396, 98, 8, '#b6e3e8') + c(442, 98, 8, '#b6e3e8') +
        c(380, 139, 16, '#344d64') + c(460, 139, 16, '#344d64') +
        r(405, 52, 28, 19, '#ecad6b') + l(419, 52, 419, 38, '#6b8b98') +
        t(312, 43, 'EV3 BUILD', 12),
      p('M315 139h240', 'none', '#8bbab4', 5) + r(344, 74, 92, 55, '#b8dfe2', 9) +
        r(359, 85, 63, 28, '#4c94a5') + c(373, 99, 7, '#d9f3f3') +
        c(409, 99, 7, '#d9f3f3') + c(357, 136, 14, '#314f68') +
        c(421, 136, 14, '#314f68') + r(495, 87, 37, 49, '#e7ad6e') +
        p('M447 79q27-36 52 0', 'none', '#e69d63', 3) +
        t(440, 53, 'SENSOR', 11)
    ],
    'nha-thiet-ke-sang-tao.html': [
      frame(r(317, 52, 157, 85, '#f6dce9') + c(365, 86, 23, '#d97eab') +
        p('M325 130l35-31 28 19 27-31 49 43z', '#a578c2') +
        r(485, 54, 53, 12, '#e4bad1') + r(485, 76, 53, 12, '#e4bad1') +
        r(485, 98, 53, 12, '#e4bad1'), 'PHOTOSHOP'),
      frame(r(316, 54, 104, 80, '#dce8ef') + p('M326 127l31-45 21 21 23-25 10 49z', '#82b2ae') +
        c(344, 74, 11, '#f6c477') + r(442, 54, 104, 80, '#f4dce6') +
        p('M451 127l31-45 21 21 23-25 10 49z', '#b57caf') +
        c(469, 74, 11, '#f1ad8c') + t(351, 150, 'BEFORE', 10) +
        t(480, 150, 'AFTER', 10), 'PHOTO EDIT'),
      r(345, 36, 164, 128, '#f7dce9', 4) + r(356, 49, 142, 13, '#b268a0') +
        c(425, 104, 34, '#f1a77e') + p('M382 143l41-51 45 51z', '#955aa1') +
        r(360, 152, 76, 5, '#b268a0') + t(316, 46, 'POSTER', 12),
      frame(r(317, 54, 185, 84, '#f6d9e7') +
        p('M328 125q39-74 86-17t74-39', 'none', '#a65b9d', 12) +
        p('M338 74q29 53 78-2t70 40', 'none', '#ec9c81', 8) +
        c(518, 75, 15, '#e6b1d1') + c(521, 113, 8, '#ecbd74') +
        t(332, 143, 'DIGITAL PAINT', 10), 'ART')
    ]
  };

  const illustrations = art[filename];
  document.querySelectorAll('.module-list summary').forEach((summary, index) => {
    const title = summary.querySelector('span')?.textContent?.trim() || '';
    const number = String(index + 1).padStart(2, '0');
    const image = document.createElement('img');
    const label = title.length > 34 ? `${title.slice(0, 33)}…` : title;
    const safe = label.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const [app, product] = context[filename][index];
    const safeApp = app.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeProduct = product.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const [background, dark, bright] = palette;
    const svg = gameScreens[filename]
      ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180">${gameScreens[filename][index]}</svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180">
      <rect width="600" height="180" rx="14" fill="${background}"/>
      <path d="M278 0v180" stroke="${bright}" stroke-opacity=".25"/>
      <rect x="16" y="18" width="48" height="28" rx="7" fill="${dark}"/>
      <text x="27" y="38" font-size="16" font-family="Arial,sans-serif" font-weight="700" fill="#fff">${number}</text>
      ${appIcon(app, dark)}
      <text x="63" y="87" font-size="17" font-family="Arial,sans-serif" font-weight="700" fill="${dark}">${safeApp}</text>
      <text x="18" y="126" font-size="14" font-family="Arial,sans-serif" font-weight="700" fill="#26324c">${safeProduct}</text>
      <text x="18" y="151" font-size="11" font-family="Arial,sans-serif" fill="#65728a">${safe}</text>
      ${illustrations[index] || ''}
    </svg>`;
    image.className = 'module-illustration';
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    image.alt = `Sơ đồ minh họa học phần ${number}: ${title}`;
    image.loading = index < 2 ? 'eager' : 'lazy';
    image.decoding = 'async';
    summary.prepend(image);
  });
})();
