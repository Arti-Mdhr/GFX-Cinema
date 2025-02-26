import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const Movies = sequelize.define(
  "Movies",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, // Stores Cloudinary image URL
      allowNull: false,
    },
    publicId: {
      type: DataTypes.STRING, // Stores Cloudinary public ID for easy deletion
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("Now_Showing", "Coming_Soon"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "movies",
  }
);

export default Movies;
