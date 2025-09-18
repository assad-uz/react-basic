import React from "react";
import Second from "./Second";
import ThirdPage from "./ThirdPage";

const App = () => {
  const a = "World";
  function name() {
    const b = "Shaon";
    return `Assaduzzaman ${b}`;
  }
  return (
    <div>
      <div>
        <h1>Hello {a}</h1>
      </div>
      <div>
        <h1>{name()}</h1>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus laborum ullam quod vero ab? Ipsum id repudiandae soluta architecto corporis, natus quod, quam, eos tempora sed adipisci odit magnam unde possimus sint impedit et. Nemo ad placeat eos sequi labore, repudiandae quos repellat debitis neque numquam dolore maiores atque omnis aperiam consequatur incidunt rerum reprehenderit excepturi! Dolore odit rem voluptas repudiandae nemo, repellendus dolores ducimus sed sapiente beatae unde vero nam incidunt recusandae facere quas. Alias odio rerum, quidem corrupti consequatur quae blanditiis nihil magni nesciunt cum odit sint quam facilis accusantium, optio fugiat dolorum consectetur neque tempora distinctio commodi aut! Ipsam asperiores nulla recusandae, ipsa, soluta cumque fuga placeat praesentium inventore itaque cupiditate laborum, iste fugiat eligendi minima et animi natus dolor a consectetur aperiam delectus perferendis veritatis nesciunt. Neque dicta ipsum unde. Nesciunt id mollitia non soluta ut obcaecati maxime incidunt tenetur tempore sunt qui, beatae quidem dolorum odit enim fuga reiciendis fugit maiores possimus minus, perferendis animi. Quaerat voluptate molestias quo fuga harum reprehenderit cum, perspiciatis non quos quibusdam. Perferendis laborum atque deserunt nihil quas at amet quia dicta, assumenda blanditiis. Odio perferendis aspernatur quae. Dolorum at modi, ipsum possimus ab amet ducimus quam. Suscipit, aliquid.
      </div>
      <div>
        <Second/>
      </div>
      <div>
        <ThirdPage/>
      </div>
      {/* Bootstrap Table */}
      <div>
        <table className="table table table-success table-striped-columns">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Assaduzzaman</td>
      <td>Shaon</td>
      <td>01234-556677</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Akib </td>
      <td>Hossain</td>
      <td>01234-556678</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Azim</td>
      <td>Akbar</td>
      <td>01234-556679</td>
    </tr>
  </tbody>
</table>

      </div>
    </div>
    
  );
};

export default App;
