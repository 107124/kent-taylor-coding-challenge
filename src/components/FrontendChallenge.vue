<!--
Please make this into a vue.js widget that displays a list of customers showing firstName, lastName, phone and email, and an action column.
Each column should be sortable, except the action column.
There should be a text input near the top that filters the results.
The only action required should be to delete a customer row.
Create dummy data that adequately showcases the features requested here.
If you open this file in a browser, it is set up to function as a standalone widget.
Please use good design and user experience principles to make it look as professional as possible.
-->


<template>
  <div class="widget-container">
    <!-- container for the opiniion logo and display same colors -->

    <div class="logo-container">
      <img src="../assets/opiniion.png" />
    </div>
    <div id="search-it">
      <div class="search-container">
        <!-- search wrapper -->
        <div class="search-wrapper">
          <label for="form-control">Search Customer</label>

          <div class="search-input">
            <i class="fa">&#xf002;</i>
            <div class="input-container">
              <input
                id="form-control"
                class="form-control"
                type="text"
                v-model="searchQuery"
                placeholder="first, last, phone or email"
              />
            </div>
          </div>
        </div>
        <!-- tables set by category and using nth child for legibility -->

        <div class="panel-body">
          <table v-if="people.length" class="hidden-container">
            <p v-if="!searchQuery && !showIt">Search results</p>
            <tbody v-else-if="searchQuery && !showIt">
              <!-- for each person in the people array, display each of their info -->

              <tr v-for="item in filterCustomer" :key="item">
                <td>{{ item.firstName.toUpperCase() }}</td>
                <td>{{ item.lastName.toUpperCase() }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td class="delete-square" v-on:click="deleteEvent(item)">
                  <!-- sending each customers item info through the delete button to delete it's index -->
                  <i class="fa trash">&#xf1f8;</i>
                </td>
              </tr>
            </tbody>
            <p v-else>No Results</p>
          </table>
        </div>
      </div>
    </div>
    <div class="dropdownList" style="margin: 50px auto 0; width: 250px"></div>
    <div class="table-container">
      <table class="display" v-show="first">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the people array, display each of their info -->
          <tr v-for="person in people" :key="person">
            <td>{{ person.firstName.toUpperCase() }}</td>
            <td>{{ person.lastName.toUpperCase() }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.email }}</td>

            <td class="delete-square" v-on:click="deleteEvent(person)">
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- each table represents the category selected -->

      <table class="display" v-show="last">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person">
            <td>{{ person.lastName.toUpperCase() }}</td>
            <td>{{ person.firstName.toUpperCase() }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.email }}</td>
            <td class="delete-square" v-on:click="deleteEvent(person)">
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="display" v-show="phone">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person">
            <td>{{ person.phone }}</td>
            <td>{{ person.firstName.toUpperCase() }}</td>
            <td>{{ person.lastName.toUpperCase() }}</td>
            <td>{{ person.email }}</td>
            <td class="delete-square" v-on:click="deleteEvent(person)">
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="display" v-show="email">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the people array, display each of their info -->

          <tr v-for="person in people" :key="person">
            <td>{{ person.email }}</td>
            <td>{{ person.firstName.toUpperCase() }}</td>
            <td>{{ person.phone }}</td>
            <td>{{ person.lastName.toUpperCase() }}</td>
            <!-- delete button -->
            <td class="delete-square" v-on:click="deleteEvent(person)">
              <!-- sending each customers item info through the delete button to delete it's index -->
            <i class="fa trash">&#xf1f8;</i>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

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
      searchStorage: false,
      inStorage: true,
      deleteName: "",
      categories: ["First", "Last", "Phone", "Email"],
      options: {
        confirmButtonColor: "#41b882",
        cancelButtonColor: "#ff7674",
      },
      people: [
        {
          firstName: "jayda",
          phone: "555-234-6532",
          lastName: "kayson",
          email: "jayda@gmail.com",
        },
        {
          firstName: "lavern",
          phone: "555-345-2059",
          lastName: "kason",
          email: "lavern@gmail.com",
        },
        {
          firstName: "alexandrea",
          phone: "555-492-0684",
          lastName: "weston",
          email: "alexandrea@gmail.com",
        },
        {
          firstName: "hyacinth",
          phone: "555-495-6938",
          lastName: "poppy",
          email: "hyacinth@gmail.com",
        },
        {
          firstName: "chelsey",
          phone: "555-392-2365",
          lastName: "clifton",
          email: "chelsey@gmail.com",
        },
        {
          firstName: "joshua",
          phone: "555-392-2265",
          lastName: "bee",
          email: "joshua@gmail.com",
        },
        {
          firstName: "kaelyn",
          phone: "555-392-1048",
          lastName: "kalyn",
          email: "kaelyn@gmail.com",
        },
        {
          firstName: "rosalee",
          phone: "555-392-2365",
          lastName: "hyacinth",
          email: "rosalee@gmail.com",
        },
        {
          firstName: "ace",
          phone: "555-392-2746",
          lastName: "annabelle",
          email: "ace@gmail.com",
        },
        {
          firstName: "zavanna",
          phone: "555-392-1847",
          lastName: "ebenezer",
          email: "zavanna@gmail.com",
        },
        {
          firstName: "Katee",
          phone: "555-392-8911",
          lastName: "Vincent",
          email: "katee@gmail.com",
        },
        {
          firstName: "kehlani",
          phone: "555-234-6532",
          lastName: "mitch",
          email: "kehlani@gmail.com",
        },
        {
          firstName: "charisma",
          phone: "555-345-2059",
          lastName: "alysia",
          email: "charisma@gmail.com",
        },
        {
          firstName: "marnie",
          phone: "555-492-0684",
          lastName: "codie",
          email: "marnie@gmail.com",
        },
        {
          firstName: "craig",
          phone: "555-495-6938",
          lastName: "scotty",
          email: "craig@gmail.com",
        },
        {
          firstName: "jaxx",
          phone: "555-392-2365",
          lastName: "lyn",
          email: "jaxx@gmail.com",
        },
        {
          firstName: "dorean",
          phone: "555-392-2265",
          lastName: "randi",
          email: "dorean@gmail.com",
        },
        {
          firstName: "noelle",
          phone: "555-392-1048",
          lastName: "ally",
          email: "noelle@gmail.com",
        },
        {
          firstName: "shelia",
          phone: "555-392-2365",
          lastName: "rosannah",
          email: "shelia@gmail.com",
        },
        {
          firstName: "stephani",
          phone: "555-392-2746",
          lastName: "macaulay",
          email: "stephani@gmail.com",
        },
        {
          firstName: "keane",
          phone: "555-392-1847",
          lastName: "edytha",
          email: "keane@gmail.com",
        },
        {
          firstName: "loreen",
          phone: "555-392-8911",
          lastName: "carlene",
          email: "loreen@gmail.com",
        },
      ],
    };
  },
  computed: {
    // filter out the searched items
    filterCustomer() {
      if (this.searchQuery) {
        return this.people.filter((item) => {
          if (item.firstName.startsWith(this.searchQuery)) {
            return (
              item.firstName.startsWith(this.searchQuery),
              (this.searchStorage = true)
            );
          } else if (item.lastName.startsWith(this.searchQuery)) {
            return (
              item.lastName.startsWith(this.searchQuery),
              (this.searchStorage = true)
            );
          } else if (item.phone.startsWith(this.searchQuery)) {
            return (
              item.phone.startsWith(this.searchQuery),
              (this.searchStorage = true)
            );
          } else if (item.email.startsWith(this.searchQuery)) {
            return (
              item.email.startsWith(this.searchQuery),
              (this.searchStorage = true)
            );
          } else {
            return (this.searchStorage = false);
          }
        });
      } else {
        console.log(this.people.searchStorage);
        return null, (this.searchStorage = false);
      }
    },
  },
  methods: {
    // delete each item that is sent by the delete button
    deleteEvent(item) {
      // var result = confirm(
      // `Are you sure you want to delete ${item.firstName}'s account?\n`
      // Vue.swal('Hello Vue world!!!')
      // this.$swal('Hello Vue world!!!')
      Swal.fire({
        title: `Do you really want to delete ${item.firstName}'s record?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "DELETE",
        denyButtonText: `Don't delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.people.splice(this.people.indexOf(item), 1);
          Swal.fire(`${item.firstName.toUpperCase()}`, "Deleted!");
          return true;
        } else if (result.isDenied) {
          Swal.fire(`${item.firstName.toUpperCase()}`, "NOT deleted");
          return false;
        }
      });
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500&display=swap");
@import url("https://kit.fontawesome.com/14ae188149.js");

:root {
  --blue: #4fc5c4;
  --orange: #f48d46;
  --gray: #545454;
}

body {
  background-color: white;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #535353;
  background-color: white;
  height: 100%;
  width: 100vw;
}

.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 42px;
}

.form-control {
  width: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  outline: none;
  border: none;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
}

.form-control::placeholder {
  color: rgb(147, 145, 145);
  font-family: "Nunito", sans-serif;
}

.fa {
  /* this is the search button */
  color: orange;
  font-size: 1.2em;
}

.trash {
  color: #9f9f9f;
}

.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 100%;
  background-color: rgba(255, 166, 0, 0.198);
  border-bottom: 2px solid orange;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 42px;
  max-height: 350px;
  overflow-y: auto;
  width: 60vw;
  border-bottom: 3px solid #535353;
}

.hidden-container p {
  padding: 8px 15px;
  margin: 5px;
}

.hidden-container tr:nth-child(odd),
.display tr:nth-child(odd) {
  background-color: rgb(245, 245, 245);
  border-left: none;
}

.table-label {
  background-color: #535353;
  color: white;
}

.hide {
  display: none;
}

.display {
  height: 100%;
  border: 3px solid #535353;
  border-radius: 5px;
  overflow-y: auto;
}

tr {
  order: 2;
}

tr:nth-child(even) {
  background-color: lightgray;
  padding: 14px 42px;
  overflow-x: hidden;
  transition: ease-in-out 0.25s;
}

th {
  cursor: pointer;
  transition: ease-in-out 0.25s;
  color: #545454;
}

td {
  padding: 15px;
  overflow-x: hidden;
}
td:nth-child(odd) {
  padding: 14px 42px;
  overflow-x: hidden;
  transition: ease-in-out 0.25s;
}

.delete-square {
  cursor: pointer;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
}
.table {
  width: 70%;
  height: 600px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100%;
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