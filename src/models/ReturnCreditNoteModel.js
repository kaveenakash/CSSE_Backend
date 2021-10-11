import mongoose from "mongoose";

const returnCreditNoteModel = mongoose.Schema(
  {
    purchaseOrder: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "PurchaseOrder",
    },
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Invoice",
    },
    returned_items: {
      item: {
        //order item original reference
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Item",
      },
      qty: {
        //requested quantity
        type: Number,
        required: true,
      },
      reason: {
        //reason for return item
        type: String,
        required: true,
      },
      status: {
        //return credits accepted
        type: String,
        required: true,
      },
    },
    comments: [
      {
        dateTime: {
          type: String,
          required: false,
        },
        comment_description: {
          //order comment
          type: String,
          required: false,
        },
        addedUser: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "users",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ReturnCreditNoteModel = mongoose.model(
  "ReturnCreditNoteModel",
  returnCreditNoteModel
);
export default ReturnCreditNoteModel;
