var HighlightCondition = {
  "ReportVersion": "2015.1.13",
  "ReportGuid": "1027ec6ec1c240df8c134471c9df4b99",
  "ReportName": "Report",
  "ReportAlias": "Highlight Condition",
  "ReportAuthor": "Stimulsoft",
  "ReportDescription": "This sample demonstrates how to use highlight condition to create a report.",
  "ReportCreated": "/Date(1085817540000+0300)/",
  "ReportChanged": "/Date(1437976409027+0300)/",
  "EngineVersion": "EngineV2",
  "Script": "using System;\r\nusing System.Drawing;\r\nusing System.Windows.Forms;\r\nusing System.Data;\r\nusing Stimulsoft.Report;\r\nusing Stimulsoft.Report.Components;\r\nusing Stimulsoft.Base.Drawing;\r\n\r\nnamespace Reports\r\n{\r\n    \r\n    public class HighlightCondition : Stimulsoft.Report.StiReport\r\n    {\r\n        \r\n\t\tpublic HighlightCondition()\r\n        {\r\n            this.InitializeComponent();\r\n        }\r\n        \r\n        #region StiReport Designer generated code - do not modify\r\n\t\t#endregion StiReport Designer generated code - do not modify\r\n    }\r\n}",
  "Styles": {
    "0": {
      "Ident": "StiStyle",
      "Name": "Title1",
      "HorAlignment": "Right",
      "VertAlignment": "Center",
      "Font": ";19;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "1": {
      "Ident": "StiStyle",
      "Name": "Title2",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";102,77,38;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "2": {
      "Ident": "StiStyle",
      "Name": "Header1",
      "VertAlignment": "Center",
      "Font": ";19;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "3": {
      "Ident": "StiStyle",
      "Name": "Header2",
      "HorAlignment": "Center",
      "VertAlignment": "Center",
      "Font": ";12;Bold;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "4": {
      "Ident": "StiStyle",
      "Name": "Header3",
      "HorAlignment": "Center",
      "VertAlignment": "Center",
      "Font": ";9;Bold;",
      "Border": "All;193,152,89;;;;;;solid:Black",
      "Brush": "solid:242,234,221",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    },
    "5": {
      "Ident": "StiStyle",
      "Name": "Data1",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "6": {
      "Ident": "StiStyle",
      "Name": "Data2",
      "Font": ";9;;",
      "Border": ";;;;;;;solid:Black",
      "Brush": "solid:240,237,232",
      "TextBrush": "solid:Black",
      "AllowUseFont": false,
      "AllowUseBorderFormatting": false,
      "AllowUseBorderSides": false,
      "AllowUseTextBrush": false,
      "AllowUseTextOptions": false
    },
    "7": {
      "Ident": "StiStyle",
      "Name": "Data3",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:240,237,232",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "8": {
      "Ident": "StiStyle",
      "Name": "Footer1",
      "VertAlignment": "Center",
      "Font": ";9;;",
      "Border": "Top;193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:102,77,38",
      "AllowUseBorderSides": false
    },
    "9": {
      "Ident": "StiStyle",
      "Name": "Footer2",
      "HorAlignment": "Right",
      "VertAlignment": "Center",
      "Font": ";12;Bold;",
      "Border": ";193,152,89;;;;;;solid:Black",
      "Brush": "solid:",
      "TextBrush": "solid:193,152,89",
      "AllowUseBorderSides": false
    }
  },
  "ReferencedAssemblies": {
    "0": "System.Dll",
    "1": "System.Drawing.Dll",
    "2": "System.Windows.Forms.Dll",
    "3": "System.Data.Dll",
    "4": "System.Xml.Dll",
    "5": "Stimulsoft.Base.Dll",
    "6": "Stimulsoft.Controls.Dll",
    "7": "Stimulsoft.Report.Dll"
  },
  "Dictionary": {
    "DataSources": {
      "0": {
        "Ident": "StiDataTableSource",
        "Name": "Categories",
        "Alias": "Categories",
        "Columns": {
          "0": {
            "Name": "CategoryID",
            "Index": -1,
            "NameInSource": "CategoryID",
            "Alias": "CategoryID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CategoryName",
            "Index": -1,
            "NameInSource": "CategoryName",
            "Alias": "CategoryName",
            "Type": "System.String"
          },
          "2": {
            "Name": "Description",
            "Index": -1,
            "NameInSource": "Description",
            "Alias": "Description",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Categories"
      },
      "1": {
        "Ident": "StiDataTableSource",
        "Name": "Countries",
        "Alias": "Countries",
        "Columns": {
          "0": {
            "Name": "CountriesID",
            "Index": -1,
            "NameInSource": "CountriesID",
            "Alias": "CountriesID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "CountryName",
            "Index": -1,
            "NameInSource": "CountryName",
            "Alias": "CountryName",
            "Type": "System.String"
          },
          "2": {
            "Name": "Flag",
            "Index": -1,
            "NameInSource": "Flag",
            "Alias": "Flag",
            "Type": "System.Byte[]"
          }
        },
        "NameInSource": "Demo.Countries"
      },
      "2": {
        "Ident": "StiDataTableSource",
        "Name": "Customers",
        "Alias": "Customers",
        "Columns": {
          "0": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "1": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "2": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "3": {
            "Name": "ContactName",
            "Index": -1,
            "NameInSource": "ContactName",
            "Alias": "ContactName",
            "Type": "System.String"
          },
          "4": {
            "Name": "ContactTitle",
            "Index": -1,
            "NameInSource": "ContactTitle",
            "Alias": "ContactTitle",
            "Type": "System.String"
          },
          "5": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "6": {
            "Name": "CustomerID",
            "Index": -1,
            "NameInSource": "CustomerID",
            "Alias": "CustomerID",
            "Type": "System.String"
          },
          "7": {
            "Name": "Fax",
            "Index": -1,
            "NameInSource": "Fax",
            "Alias": "Fax",
            "Type": "System.String"
          },
          "8": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          },
          "9": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "10": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Customers"
      },
      "3": {
        "Ident": "StiDataTableSource",
        "Name": "Employees",
        "Alias": "Employees",
        "Columns": {
          "0": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "1": {
            "Name": "BirthDate",
            "Index": -1,
            "NameInSource": "BirthDate",
            "Alias": "BirthDate",
            "Type": "System.DateTime"
          },
          "2": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "3": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "4": {
            "Name": "EmployeeID",
            "Index": -1,
            "NameInSource": "EmployeeID",
            "Alias": "EmployeeID",
            "Type": "System.Int32"
          },
          "5": {
            "Name": "FirstName",
            "Index": -1,
            "NameInSource": "FirstName",
            "Alias": "FirstName",
            "Type": "System.String"
          },
          "6": {
            "Name": "HireDate",
            "Index": -1,
            "NameInSource": "HireDate",
            "Alias": "HireDate",
            "Type": "System.DateTime"
          },
          "7": {
            "Name": "HomePhone",
            "Index": -1,
            "NameInSource": "HomePhone",
            "Alias": "HomePhone",
            "Type": "System.String"
          },
          "8": {
            "Name": "LastName",
            "Index": -1,
            "NameInSource": "LastName",
            "Alias": "LastName",
            "Type": "System.String"
          },
          "9": {
            "Name": "Notes",
            "Index": -1,
            "NameInSource": "Notes",
            "Alias": "Notes",
            "Type": "System.String"
          },
          "10": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "11": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          },
          "12": {
            "Name": "ReportsTo",
            "Index": -1,
            "NameInSource": "ReportsTo",
            "Alias": "ReportsTo",
            "Type": "System.Int32"
          },
          "13": {
            "Name": "Title",
            "Index": -1,
            "NameInSource": "Title",
            "Alias": "Title",
            "Type": "System.String"
          }
        },
        "NameInSource": "Demo.Employees"
      },
      "4": {
        "Ident": "StiDataTableSource",
        "Name": "Order Details",
        "Alias": "Order Details",
        "Columns": {
          "0": {
            "Name": "Discount",
            "Index": -1,
            "NameInSource": "Discount",
            "Alias": "Discount",
            "Type": "System.Single"
          },
          "1": {
            "Name": "OrderID",
            "Index": -1,
            "NameInSource": "OrderID",
            "Alias": "OrderID",
            "Type": "System.Int32"
          },
          "2": {
            "Name": "ProductID",
            "Index": -1,
            "NameInSource": "ProductID",
            "Alias": "ProductID",
            "Type": "System.Int32"
          },
          "3": {
            "Name": "Quantity",
            "Index": -1,
            "NameInSource": "Quantity",
            "Alias": "Quantity",
            "Type": "System.Int16"
          },
          "4": {
            "Name": "UnitPrice",
            "Index": -1,
            "NameInSource": "UnitPrice",
            "Alias": "UnitPrice",
            "Type": "System.Decimal"
          }
        },
        "NameInSource": "Demo.Order Details"
      },
      "5": {
        "Ident": "StiDataTableSource",
        "Name": "Orders",
        "Alias": "Orders",
        "Columns": {
          "0": {
            "Name": "CustomerID",
            "Index": -1,
            "NameInSource": "CustomerID",
            "Alias": "CustomerID",
            "Type": "System.String"
          },
          "1": {
            "Name": "EmployeeID",
            "Index": -1,
            "NameInSource": "EmployeeID",
            "Alias": "EmployeeID",
            "Type": "System.Int32"
          },
          "2": {
            "Name": "Freight",
            "Index": -1,
            "NameInSource": "Freight",
            "Alias": "Freight",
            "Type": "System.Decimal"
          },
          "3": {
            "Name": "OrderDate",
            "Index": -1,
            "NameInSource": "OrderDate",
            "Alias": "OrderDate",
            "Type": "System.DateTime"
          },
          "4": {
            "Name": "OrderID",
            "Index": -1,
            "NameInSource": "OrderID",
            "Alias": "OrderID",
            "Type": "System.Int32"
          },
          "5": {
            "Name": "RequiredDate",
            "Index": -1,
            "NameInSource": "RequiredDate",
            "Alias": "RequiredDate",
            "Type": "System.DateTime"
          },
          "6": {
            "Name": "ShipAddress",
            "Index": -1,
            "NameInSource": "ShipAddress",
            "Alias": "ShipAddress",
            "Type": "System.String"
          },
          "7": {
            "Name": "ShipCity",
            "Index": -1,
            "NameInSource": "ShipCity",
            "Alias": "ShipCity",
            "Type": "System.String"
          },
          "8": {
            "Name": "ShipCountry",
            "Index": -1,
            "NameInSource": "ShipCountry",
            "Alias": "ShipCountry",
            "Type": "System.String"
          },
          "9": {
            "Name": "ShipName",
            "Index": -1,
            "NameInSource": "ShipName",
            "Alias": "ShipName",
            "Type": "System.String"
          },
          "10": {
            "Name": "ShippedDate",
            "Index": -1,
            "NameInSource": "ShippedDate",
            "Alias": "ShippedDate",
            "Type": "System.DateTime"
          },
          "11": {
            "Name": "ShipPostalCode",
            "Index": -1,
            "NameInSource": "ShipPostalCode",
            "Alias": "ShipPostalCode",
            "Type": "System.String"
          },
          "12": {
            "Name": "ShipRegion",
            "Index": -1,
            "NameInSource": "ShipRegion",
            "Alias": "ShipRegion",
            "Type": "System.String"
          },
          "13": {
            "Name": "ShipVia",
            "Index": -1,
            "NameInSource": "ShipVia",
            "Alias": "ShipVia",
            "Type": "System.Int32"
          }
        },
        "NameInSource": "Demo.Orders"
      },
      "6": {
        "Ident": "StiDataTableSource",
        "Name": "Products",
        "Alias": "Products",
        "Columns": {
          "0": {
            "Name": "CategoryID",
            "Index": -1,
            "NameInSource": "CategoryID",
            "Alias": "CategoryID",
            "Type": "System.Int32"
          },
          "1": {
            "Name": "ProductID",
            "Index": -1,
            "NameInSource": "ProductID",
            "Alias": "ProductID",
            "Type": "System.Int32"
          },
          "2": {
            "Name": "ProductName",
            "Index": -1,
            "NameInSource": "ProductName",
            "Alias": "ProductName",
            "Type": "System.String"
          },
          "3": {
            "Name": "QuantityPerUnit",
            "Index": -1,
            "NameInSource": "QuantityPerUnit",
            "Alias": "QuantityPerUnit",
            "Type": "System.String"
          },
          "4": {
            "Name": "SupplierID",
            "Index": -1,
            "NameInSource": "SupplierID",
            "Alias": "SupplierID",
            "Type": "System.Int32"
          },
          "5": {
            "Name": "UnitPrice",
            "Index": -1,
            "NameInSource": "UnitPrice",
            "Alias": "UnitPrice",
            "Type": "System.Decimal"
          },
          "6": {
            "Name": "UnitsInStock",
            "Index": -1,
            "NameInSource": "UnitsInStock",
            "Alias": "UnitsInStock",
            "Type": "System.Int16"
          }
        },
        "NameInSource": "Demo.Products"
      },
      "7": {
        "Ident": "StiDataTableSource",
        "Name": "Shippers",
        "Alias": "Shippers",
        "Columns": {
          "0": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "1": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          },
          "2": {
            "Name": "ShipperID",
            "Index": -1,
            "NameInSource": "ShipperID",
            "Alias": "ShipperID",
            "Type": "System.Int32"
          }
        },
        "NameInSource": "Demo.Shippers"
      },
      "8": {
        "Ident": "StiDataTableSource",
        "Name": "Suppliers",
        "Alias": "Suppliers",
        "Columns": {
          "0": {
            "Name": "Address",
            "Index": -1,
            "NameInSource": "Address",
            "Alias": "Address",
            "Type": "System.String"
          },
          "1": {
            "Name": "City",
            "Index": -1,
            "NameInSource": "City",
            "Alias": "City",
            "Type": "System.String"
          },
          "2": {
            "Name": "CompanyName",
            "Index": -1,
            "NameInSource": "CompanyName",
            "Alias": "CompanyName",
            "Type": "System.String"
          },
          "3": {
            "Name": "ContactName",
            "Index": -1,
            "NameInSource": "ContactName",
            "Alias": "ContactName",
            "Type": "System.String"
          },
          "4": {
            "Name": "ContactTitle",
            "Index": -1,
            "NameInSource": "ContactTitle",
            "Alias": "ContactTitle",
            "Type": "System.String"
          },
          "5": {
            "Name": "Country",
            "Index": -1,
            "NameInSource": "Country",
            "Alias": "Country",
            "Type": "System.String"
          },
          "6": {
            "Name": "Fax",
            "Index": -1,
            "NameInSource": "Fax",
            "Alias": "Fax",
            "Type": "System.String"
          },
          "7": {
            "Name": "HomePage",
            "Index": -1,
            "NameInSource": "HomePage",
            "Alias": "HomePage",
            "Type": "System.String"
          },
          "8": {
            "Name": "Phone",
            "Index": -1,
            "NameInSource": "Phone",
            "Alias": "Phone",
            "Type": "System.String"
          },
          "9": {
            "Name": "PostalCode",
            "Index": -1,
            "NameInSource": "PostalCode",
            "Alias": "PostalCode",
            "Type": "System.String"
          },
          "10": {
            "Name": "Region",
            "Index": -1,
            "NameInSource": "Region",
            "Alias": "Region",
            "Type": "System.String"
          },
          "11": {
            "Name": "SupplierID",
            "Index": -1,
            "NameInSource": "SupplierID",
            "Alias": "SupplierID",
            "Type": "System.Int32"
          }
        },
        "NameInSource": "Demo.Suppliers"
      }
    },
    "Databases": {
      "0": {
        "Ident": "StiXmlDatabase",
        "Name": "Demo",
        "Alias": "Demo",
        "PathData": "Data/Demo.xml",
        "PathSchema": "Data/Demo.xsd"
      }
    },
    "Relations": {
      "0": {
        "Name": "Employees",
        "ChildColumns": {
          "0": "ReportsTo"
        },
        "ParentColumns": {
          "0": "EmployeeID"
        },
        "NameInSource": "EmployeesEmployees",
        "Alias": "Employees",
        "ParentSource": "Employees",
        "ChildSource": "Employees"
      },
      "1": {
        "Name": "Products",
        "ChildColumns": {
          "0": "ProductID"
        },
        "ParentColumns": {
          "0": "ProductID"
        },
        "NameInSource": "ProductsOrder_Details",
        "Alias": "Products",
        "ParentSource": "Products",
        "ChildSource": "Order Details"
      },
      "2": {
        "Name": "Orders",
        "ChildColumns": {
          "0": "OrderID"
        },
        "ParentColumns": {
          "0": "OrderID"
        },
        "NameInSource": "OrdersOrder_Details",
        "Alias": "Orders",
        "ParentSource": "Orders",
        "ChildSource": "Order Details"
      },
      "3": {
        "Name": "Customers",
        "ChildColumns": {
          "0": "CustomerID"
        },
        "ParentColumns": {
          "0": "CustomerID"
        },
        "NameInSource": "CustomersOrders",
        "Alias": "Customers",
        "ParentSource": "Customers",
        "ChildSource": "Orders"
      },
      "4": {
        "Name": "Shippers",
        "ChildColumns": {
          "0": "ShipVia"
        },
        "ParentColumns": {
          "0": "ShipperID"
        },
        "NameInSource": "ShippersOrders",
        "Alias": "Shippers",
        "ParentSource": "Shippers",
        "ChildSource": "Orders"
      },
      "5": {
        "Name": "Employees",
        "ChildColumns": {
          "0": "EmployeeID"
        },
        "ParentColumns": {
          "0": "EmployeeID"
        },
        "NameInSource": "EmployeesOrders",
        "Alias": "Employees",
        "ParentSource": "Employees",
        "ChildSource": "Orders"
      },
      "6": {
        "Name": "Categories",
        "ChildColumns": {
          "0": "CategoryID"
        },
        "ParentColumns": {
          "0": "CategoryID"
        },
        "NameInSource": "CategoriesProducts",
        "Alias": "Categories",
        "ParentSource": "Categories",
        "ChildSource": "Products"
      },
      "7": {
        "Name": "Suppliers",
        "ChildColumns": {
          "0": "SupplierID"
        },
        "ParentColumns": {
          "0": "SupplierID"
        },
        "NameInSource": "SuppliersProducts",
        "Alias": "Suppliers",
        "ParentSource": "Suppliers",
        "ChildSource": "Products"
      }
    }
  },
  "Pages": {
    "0": {
      "Ident": "StiPage",
      "Name": "Page1",
      "Guid": "286dd70aba9b4ab79e5f6f6eedf510b9",
      "Interaction": {
        "Ident": "StiInteraction"
      },
      "Border": ";;2;;;;;solid:Black",
      "Brush": "solid:",
      "Components": {
        "0": {
          "Ident": "StiPageFooterBand",
          "Name": "PageFooterBand2",
          "Guid": "ad5dd646c93f4256a4c1c8c52f327341",
          "ClientRectangle": "0,26.9,19,0.8",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text5",
              "Guid": "ef0e7029c2ed4533ac23d67acf672504",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "6.8,0.4,12.2,0.4",
              "ComponentStyle": "Footer1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{PageNofM}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": ";193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38"
            }
          }
        },
        "1": {
          "Ident": "StiReportTitleBand",
          "Name": "ReportTitleBand1",
          "Guid": "029be4a6407f4bbeb3ba1fc6641f7369",
          "ClientRectangle": "0,0.4,19,2",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text20",
              "Guid": "158431c4baee45fabd4d695df709dcd8",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "9.4,0,9.6,0.8",
              "ComponentStyle": "Title1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Stimulsoft"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";19;;",
              "Border": "Bottom;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:193,152,89",
              "Type": "Expression"
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text23",
              "Guid": "edbac365b4dd4196b98770062a6f8d75",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,9.4,0.8",
              "ComponentStyle": "Title1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Highlight Condition"
              },
              "VertAlignment": "Center",
              "Font": ";19;;",
              "Border": "Bottom;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:193,152,89",
              "Type": "Expression"
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text15",
              "Guid": "ee2ee01f40f04a5da7cdd6c89e96b59b",
              "CanGrow": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,1,14.6,0.8",
              "ComponentStyle": "Title2",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{ReportDescription}"
              },
              "Font": ";9;;",
              "Border": ";102,77,38;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              },
              "Type": "Expression"
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text18",
              "Guid": "6948a939cfd643bf86bd246673de031a",
              "CanGrow": true,
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "14.6,1,4.4,0.8",
              "ComponentStyle": "Title2",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Date: {Today.ToString(\"Y\")}"
              },
              "HorAlignment": "Right",
              "Font": ";9;;",
              "Border": ";102,77,38;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextOptions": {
                "WordWrap": true
              },
              "Type": "Expression",
              "TextFormat": {
                "Ident": "StiDateFormatService",
                "StringFormat": "yyyy, MMMM"
              }
            }
          }
        },
        "2": {
          "Ident": "StiHeaderBand",
          "Name": "HeaderBand2",
          "ClientRectangle": "0,3.2,19,0.6",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text12",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "14.2,0,2.4,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Price"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text11",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "10.8,0,3.4,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Quantity per unit"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89",
              "TextOptions": {
                "WordWrap": true
              }
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text10",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "4.8,0,6,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Name"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text13",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "16.6,0,2.4,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Units in stock"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89",
              "TextOptions": {
                "WordWrap": true
              }
            },
            "4": {
              "Ident": "StiText",
              "Name": "Text9",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,4.8,0.6",
              "ComponentStyle": "Header3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Categories"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;Bold;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:242,234,221",
              "TextBrush": "solid:193,152,89"
            }
          }
        },
        "3": {
          "Ident": "StiDataBand",
          "Name": "DataBand2",
          "ClientRectangle": "0,4.6,19,0.6",
          "Interaction": {
            "Ident": "StiBandInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text1",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "4.8,0,6,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Products.ProductName}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38"
            },
            "1": {
              "Ident": "StiText",
              "Name": "Text14",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,4.8,0.6",
              "ComponentStyle": "Data3",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "ProcessingDuplicates": "Merge",
              "Text": {
                "Value": "{Products.Categories.CategoryName}"
              },
              "HorAlignment": "Center",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:240,237,232",
              "TextBrush": "solid:102,77,38"
            },
            "2": {
              "Ident": "StiText",
              "Name": "Text2",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "10.8,0,3.4,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Products.QuantityPerUnit}"
              },
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "GroupSeparator": ","
              }
            },
            "3": {
              "Ident": "StiText",
              "Name": "Text3",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "14.2,0,2.4,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Products.UnitPrice}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextFormat": {
                "Ident": "StiCurrencyFormatService",
                "NegativePattern": 0,
                "GroupSeparator": ",",
                "PositivePattern": 0
              }
            },
            "4": {
              "Ident": "StiText",
              "Name": "Text4",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "16.6,0,1.8,0.6",
              "ComponentStyle": "Data1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "{Products.UnitsInStock}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Left;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "UseGroupSeparator": false
              }
            },
            "5": {
              "Ident": "StiText",
              "Name": "Text8",
              "Guid": "416fbe7ba3914626a07136dca5ced830",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "18.4,0,0.6,0.6",
              "ComponentStyle": "Data1",
              "Conditions": {
                "0": {
                  "Ident": "StiIconSetCondition",
                  "Column": "Products.UnitsInStock",
                  "IconSet": "QuartersRed5",
                  "IconSetItem1": {
                    "Ident": "StiIconSetItem",
                    "Icon": "QuarterFullRed",
                    "Value": 80.0
                  },
                  "IconSetItem2": {
                    "Ident": "StiIconSetItem",
                    "Icon": "QuarterThreeFourthRed",
                    "Value": 60.0
                  },
                  "IconSetItem3": {
                    "Ident": "StiIconSetItem",
                    "Icon": "QuarterHalfRed",
                    "Value": 40.0
                  },
                  "IconSetItem4": {
                    "Ident": "StiIconSetItem",
                    "Icon": "QuarterQuarterRed",
                    "Value": 20.0
                  },
                  "IconSetItem5": {
                    "Ident": "StiIconSetItem",
                    "Icon": "QuarterNoneRed"
                  }
                }
              },
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "Right;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "TextFormat": {
                "Ident": "StiNumberFormatService",
                "NegativePattern": 1,
                "DecimalDigits": 0,
                "GroupSeparator": ",",
                "UseGroupSeparator": false
              }
            }
          },
          "KeepChildTogether": true,
          "KeepDetails": "KeepDetailsTogether",
          "DataSourceName": "Products",
          "DataRelationName": "CategoriesProducts",
          "EvenStyle": "Data2",
          "KeepDetailsTogether": true,
          "Sort": {
            "0": "ASC",
            "1": "CategoriesProducts",
            "2": "CategoryName",
            "3": "ASC",
            "4": "ProductName"
          }
        },
        "4": {
          "Ident": "StiFooterBand",
          "Name": "FooterBand2",
          "ClientRectangle": "0,6,19,0.6",
          "Interaction": {
            "Ident": "StiInteraction"
          },
          "Border": ";;;;;;;solid:Black",
          "Brush": "solid:",
          "Components": {
            "0": {
              "Ident": "StiText",
              "Name": "Text16",
              "MinSize": "0,0",
              "MaxSize": "0,0",
              "ClientRectangle": "0,0,19,0.6",
              "ComponentStyle": "Footer1",
              "Interaction": {
                "Ident": "StiInteraction"
              },
              "Text": {
                "Value": "Count per Page: {cCount(DataBand2)}"
              },
              "HorAlignment": "Right",
              "VertAlignment": "Center",
              "Font": ";9;;",
              "Border": "All;193,152,89;;;;;;solid:Black",
              "Brush": "solid:",
              "TextBrush": "solid:102,77,38",
              "Type": "Expression"
            }
          },
          "PrintOnAllPages": true
        }
      },
      "PageWidth": 21.0,
      "PageHeight": 29.7,
      "Watermark": {
        "TextBrush": "solid:100,0,0,0"
      },
      "Margins": {
        "Left": 1.0,
        "Right": 1.0,
        "Top": 1.0,
        "Bottom": 1.0
      }
    }
  }
}