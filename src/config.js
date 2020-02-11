const upcomingText = 'Upcoming';
export { upcomingText };

const pdfLink = '/assets/portfolio.pdf'; // path from 'public' directory
export { pdfLink };

const showMenuIfCursorMovedRightInPixels = document.body.clientWidth > 768 ? 200 : 30;
export { showMenuIfCursorMovedRightInPixels };

const pageWidth = `
  width: 80vw;
  max-width: 100vw;
  @media(min-width: 1100px) {
    min-width: 1000px;
  }
  @media (max-width: 1100px) {
    width: 100vw;
  }
`;
export { pageWidth };

const projects = [
  {
    title: '.CANs',
    shortDescription:
      'Lorem ipsum <b>dolor sit amet</b>, consectetur <i>adipisicing elit</i>. Atque culpa, unde.',
    image: 'blur-close-up-code-computer-546819.jpg', // in /public/assets/images
    tags: ['project', 'soft', 'blockchain', 'network'],
    fullDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div><div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div><div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div><div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div><div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>`
  },
  {
    title: '_V',
    shortDescription:
      'Aliquid aperiam beatae consectetur <b>culpa cumque debitis</b> eaque eius, <em>enim, fugiat maiores nemo</em>.',
    image: 'business-code-coding-computer-270360.jpg', // in /public/assets/images
    tags: ['blockchain', 'network'],
    fullDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div>`
  },
  {
    title: 'TotallyNotVirus',
    shortDescription:
      'A atque eaque <u>excepturi ipsam magni</u> molestias nulla quos, <s>ullam unde vitae</s>. Alias aliquid architecto.',
    image: 'creative-internet-computer-display-2004161.jpg', // in /public/assets/images
    tags: [
      'project',
      'soft',
      'virus',
      'antivirus',
      'totally',
      'not',
      'heal',
      'cure',
      'other tags'
    ],
    fullDescription: `<div> Ducimus eveniet fugiat illum impedit incidunt inventore, iste iusto laboriosam, laudantium, nemo pariatur quis quod repellendus tempora tenetur veniam?</div>
    <div>Ab aperiam consequuntur corporis, eius eligendi eos error excepturi expedita fugit in molestiae porro, quia sunt. A alias delectus explicabo illum odio reiciendis soluta tempora totam vero voluptatum! Fuga, sunt.</div>
    <div>Aliquid aperiam beatae consectetur culpa cumque debitis eaque eius, enim, fugiat maiores nemo non nostrum quasi repudiandae, totam vel velit voluptatum! Corporis dolor hic laborum nam, quae veritatis voluptatem. Est?</div>
    <div>A atque eaque excepturi ipsam magni molestias nulla quos, ullam unde vitae. Alias aliquid architecto, doloremque eaque facere in ipsum laborum nam natus placeat provident quas qui sequi tempore totam!</div>
    <div>Aperiam asperiores, aut commodi consequuntur cum, earum, eos eum hic in labore libero magnam molestiae molestias quam quisquam sapiente sequi veniam voluptas. Dolore eligendi ex id iusto. Dicta, iusto, nihil?</div>`
  }
];
export { projects };
