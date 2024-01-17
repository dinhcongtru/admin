<template>
      <div class="card">
            <div class="card-header pb-0">
                  <h3>{{ title }}</h3>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
                  <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                              <thead>
                                    <tr>
                                          <th v-if="isCount"
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                STT</th>
                                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                                                v-for="(header, index) in listHeader" :key="index">{{ header.text }}</th>
                                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                                                v-if="isAction">Hành động</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr v-for="(object, index) in listData" :key="index">
                                          <td v-if="isCount">
                                                <h6 class="mb-0 text-sm">{{ index + 1 }}</h6>
                                          </td>
                                          <!-- render ra column -->
                                          <td v-for="(column, ind) in listHeader" :key="ind">
                                                <h6 :class="column.style">{{ showData(object, column.fieldName) }}</h6>
                                          </td>
                                          <!-- <td>
                    <h6 class="mb-0 text-sm">{{ item.fullName }}</h6>
                  </td>
                  <td>
                    <h6 class="mb-0 text-sm">{{ item.email }}</h6>
                  </td>
                  <td>
                    <h6 class="mb-0 text-sm">{{ item.totalPrice.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                            }) }}₫</h6>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <argon-badge variant="gradient" color="success">
                      {{ item.state }}
                    </argon-badge> -->
                                          <!-- <span class="badge badge-sm bg-gradient-success">{{ item.state }}</span> -->
                                          <!-- </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">{{ handleDOB(item.orderDate) }}</span>
                  </td> -->
                                          <td class="align-middle" v-if="isAction">
                                                <a v-if="isView" :href="`/orders/detail&code=${object.code}`"
                                                      class="badge badge-sm bg-gradient-warning" data-toggle="tooltip"
                                                      data-original-title="Edit user">
                                                      <i class="fa-sharp fa-solid fa-eye"></i>
                                                </a>
                                                <a v-else :href="`/orders/detail&code=${object.code}`"
                                                      class="badge badge-sm bg-gradient-warning" data-toggle="tooltip"
                                                      data-original-title="Edit user">
                                                      <i class="fa-solid fa-pen-to-square"></i>
                                                </a>
                                                <a :href="`/orders/detail&code=${object.code}`"
                                                      class="badge badge-sm bg-gradient-danger" data-toggle="tooltip"
                                                      data-original-title="Edit user"><i class="fa-solid fa-trash"></i></a>
                                          </td>
                                    </tr>

                                    <!-- <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          src="../../assets/img/team-3.jpg"
                          class="avatar avatar-sm me-3"
                          alt="user2"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Alexa Liras</h6>
                        <p class="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                    <p class="text-xs text-secondary mb-0">Developer</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">11/01/19</span>
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          src="../../assets/img/team-4.jpg"
                          class="avatar avatar-sm me-3"
                          alt="user3"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Laurent Perrier</h6>
                        <p class="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Executive</p>
                    <p class="text-xs text-secondary mb-0">Projects</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">Online</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">19/09/17</span>
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          src="../../assets/img/team-3.jpg"
                          class="avatar avatar-sm me-3"
                          alt="user4"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Michael Levi</h6>
                        <p class="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Programator</p>
                    <p class="text-xs text-secondary mb-0">Developer</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-success">Online</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">24/12/08</span>
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          src="../../assets/img/team-2.jpg"
                          class="avatar avatar-sm me-3"
                          alt="user5"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Richard Gran</h6>
                        <p class="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                    <p class="text-xs text-secondary mb-0">Executive</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">04/10/21</span>
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >Edit</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div>
                        <img
                          src="../../assets/img/team-4.jpg"
                          class="avatar avatar-sm me-3"
                          alt="user6"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">Miriam Eric</h6>
                        <p class="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Programtor</p>
                    <p class="text-xs text-secondary mb-0">Developer</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <span class="badge badge-sm bg-gradient-secondary">Offline</span>
                  </td>
                  <td class="align-middle text-center">
                    <span class="text-secondary text-xs font-weight-bold">14/09/20</span>
                  </td>
                  <td class="align-middle">
                    <a
                      href="javascript:;"
                      class="text-secondary font-weight-bold text-xs"
                      data-toggle="tooltip"
                      data-original-title="Edit user"
                    >Edit</a>
                  </td>
                </tr> -->
                              </tbody>
                        </table>
                  </div>
            </div>
      </div>
</template>
<script>
export default {
      name:"TableProducts",

}
</script>