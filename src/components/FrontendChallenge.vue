<!--
Please make this into a vue.js widget that displays a list of customers showing firstName, lastName, phone and email, and an action column.
Each column should be sortable, except the action column.
There should be a text input near the top that filters the results.
The only action required should be to delete a customer row.
Create dummy data that adequately showcases the features requested here.
If you open this file in a browser, it is set up to function as a standalone widget.
Please use good design and user experience principles to make it look as professional as possible.
-->

// FIXME add scripts from file

<template>
  <div class="widget-container">
    <!-- container for the opiniion logo and display same colors -->

    <div class="logo-container">
      <img src="../assets/opiniion.png" />
    </div>
    <div id="search-it">
      <div class="search-container">
        <div class="panel-heading" style="font-weight: bold">
          <div>Search Customers</div>
        </div>
        <div class="row">
          <!-- search wrapper -->

          <div class="search-wrapper">
            <input
              class="form-control"
              type="text"
              v-model="searchQuery"
              placeholder="Search"
            />
          </div>
        </div>

        <!-- tables set by category and using nth child for legibility -->

        <div class="panel-body" style="max-height: 400px; overflow-y: scroll">
          <table v-if="people.length" class="table-container">
            <tbody>
              <!-- for each person in the people array, display each of their info -->

              <tr v-for="item in filterCustomer" :key="item">
                <h1 v-if="showIt">hey</h1>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <!-- sending each customers item info through the delete button to delete it's index -->
                  <button v-on:click="deleteEvent(item)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="dropdownList" style="margin: 50px auto 0; width: 250px"></div>
    <div class="table-container">
      <table id="table_id" class="display" v-show="first">
        <thead>
          <tr>
            <th
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the people array, display each of their info -->
          <tr v-for="person in people" :key="person">
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.email }}</td>

            <td>
              <button v-on:click="deleteEvent(person)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- each table represents the category selected -->

      <table v-show="last">
        <thead>
          <tr>
            <th
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person">
            <td>{{ person.lastName }}</td>
            <td>{{ person.firstName }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.email }}</td>
            <td>
              <button v-on:click="deleteEvent(person)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <table v-show="phone">
        <thead>
          <tr>
            <th
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person">
            <td>{{ person.phone }}</td>
            <td>{{ person.firstName }}</td>
            <td>{{ person.lastName }}</td>
            <td>{{ person.email }}</td>
            <td>
              <button v-on:click="deleteEvent(person)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <table v-show="email">
        <thead>
          <tr>
            <th
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>
            <th
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the people array, display each of their info -->

          <tr v-for="person in people" :key="person">
            <td>{{ person.email }}</td>
            <td>{{ person.firstName }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.lastName }}</td>
            <td>
              <!-- delete button -->
              <button v-on:click="deleteEvent(person)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  el: "#search-it",
  data() {
    return {
      first: true,
      last: false,
      phone: false,
      email: false,
      showIt: false,
      searchQuery: "",
      inStorage: true,
      deleteName: "",
      categories: ["First", "Last", "Phone", "Email"],
      people: [
        {
          firstName: "jason",
          phone: "555-234-6532",
          lastName: "anderson",
          email: "Jason@gmail.com",
        },
        {
          firstName: "sam",
          phone: "555-345-2059",
          lastName: "johnston",
          email: "sam@gmail.com",
        },
        {
          firstName: "andrew",
          phone: "555-492-0684",
          lastName: "mugal",
          email: "andrew@gmail.com",
        },
        {
          firstName: "zoe",
          phone: "555-495-6938",
          lastName: "parker",
          email: "zoe@gmail.com",
        },
        {
          firstName: "gene",
          phone: "555-392-2365",
          lastName: "sparrow",
          email: "gene@gmail.com",
        },
        {
          firstName: "clark",
          phone: "555-392-2265",
          lastName: "kent",
          email: "superman@gmail.com",
        },
        {
          firstName: "elizabeth",
          phone: "555-392-1048",
          lastName: "nancy",
          email: "elle@gmail.com",
        },
        {
          firstName: "james",
          phone: "555-392-2365",
          lastName: "taylor",
          email: "jt@gmail.com",
        },
        {
          firstName: "carry",
          phone: "555-392-2746",
          lastName: "underwood",
          email: "country@gmail.com",
        },
        {
          firstName: "cinderella",
          phone: "555-392-1847",
          lastName: "charming",
          email: "gene@gmail.com",
        },
        {
          firstName: "jaq",
          phone: "555-392-8911",
          lastName: "cluso",
          email: "clues-r-us@gmail.com",
        },
      ],
    };
  },
  computed: {
    // filter out the searched items
    filterCustomer() {
      if (this.searchQuery) {
        return this.people.filter((item) => {
          return item.firstName.startsWith(this.searchQuery);
        });
      } else {
        return null;
      }
    },
  },
  methods: {
    // delete each item that is sent by the delete button
    deleteEvent(item) {
      console.log(item);
      alert(`The account: ${item.email} has been deleted`);
      this.people.splice(this.people.indexOf(item), 1);
    },
  },
};
</script>


<style scoped>
/* @import url(https://cdn.syncfusion.com/ej2/material.css); */
:root {
  --blue: #4fc5c4;
  --orange: #f48d46;
  --gray: #545454;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 15px;
}
img {
  width: 215px;
  justify-self: flex-start;
}
.widget-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
  height: 100%;
  width: 100vw;
}
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 30px;
  outline: none;
  margin-top: 15px;
  border: 1px solid white;
  text-align: center;
  text-decoration: none;
}
/*
#talbe_id {
  background-color: blue;
  color: orange;
} */

tr {
  order: 2;
  /* border: 10px solid black; */
}
th {
  cursor: pointer;
  transition: ease-in-out 0.25s;
  color: #545454;
}
th:hover {
  color: white;
}
td {
  /* border: 1px solid black; */
  padding: 15px;
  overflow-x: scroll;
  text-transform: capitalize;
}
td:nth-child(odd) {
  background-color: lightgray;
  padding: 14px 42px;
  overflow-x: scroll;
  transition: ease-in-out 0.25s;
}
td:hover {
  background-color: var(--orange);
}
.table-container {
  margin: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  width: 70%;
}
.action {
  color: white;
}
.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.fa-trash-alt {
  color: var(--gray);
  cursor: pointer;
  margin: 25px;
  transition: ease-in-out 0.25s;
  pointer-events: all;
  border: none;
  font-size: 18px;
}
.fa-trash-alt:hover {
  color: red;
}
p {
  font-size: 1.2em;
}
h3 {
  color: white;
}

.panel-body {
  background-color: blue;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}

.customer-row {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 30px;
  padding: 5px;
  margin-right: 15px;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  transition: ease-in-out 0.25s;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 1.2em;
}
button:hover {
  color: white;
}
</style>