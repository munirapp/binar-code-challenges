"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          full_name: "Bayu Suryo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Tri Agung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Tamam Ahda",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Eka Diah",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          full_name: "Kurniawan Agni",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
