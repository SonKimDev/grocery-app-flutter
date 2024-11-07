const categoriesService = require("../services/categories.service");
const upload = require("../middeware/category.upload");

exports.create = (req, res, next) => {
  upload(req, res, function err() {
    if (err) {
      next(err);
    } else {
      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        categoryName: req.body.categoryName,
        cateogryDescription: req.body.cateogryDescription,
        categoryImage: path != "" ? "/" + path : "",
      };

      categoriesService.createCategory(model, (error, result) => {
        if (error) {
          return next(error);
        } else {
          return res.status(200).send({
            message: "Success",
            data: result,
          });
        }
      });
    }
  });
};

exports.findAll = (req, res, next) => {
  var model = {
    categoryName: req.query.categoryName,
    pageSize: req.query.pageSize,
    page: req.query.page
  };

  categoriesService.getCategories(model, (error, result) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "Success",
        data: result,
      });
    }
  });
};

exports.findOne = (req, res, next) => {
  var model = {
    categoriId: req.params.categoriId,
  };

  categoriesService.getCategoryById(model, (error, result) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "Success",
        data: result,
      });
    }
  });
};

exports.update = (req, res, next) => {
  upload(req, res, function err() {
    if (err) {
      next(err);
    } else {
      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        categoriId: req.params.id,
        categoryName: req.body.categoryName,
        cateogryDescription: req.body.cateogryDescription,
        categoryImage: path != "" ? "/" + path : "",
      };

      categoriesService.updateCategory(model, (error, result) => {
        if (error) {
          return next(error);
        } else {
          return res.status(200).send({
            message: "Success",
            data: result,
          });
        }
      });
    }
  });
};

exports.delete = (req, res, next) => {
  var model = {
    categoriId: req.params.categoriId,
  };

  categoriesService.deleteCategory(model, (error, result) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).send({
        message: "Success",
        data: result,
      });
    }
  });
};