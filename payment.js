function createCustomer(name, email, initialBalance) {
  return {
    name,
    email,
    balance: initialBalance,
  };
}

function createPaymentProcessor() {
  return {
    customers: [],

    registerCustomer(customer) {
      this.customers.push(customer);
      return this.customers.length - 1;
    },

    addFunds(customerIndex, amount) {
      this.customers[customerIndex].balance += amount;
    },

    makePayment(senderIndex, recipientIndex, amount) {
      const sender = this.customers[senderIndex];
      const recipient = this.customers[recipientIndex];

      if (sender.balance >= amount) {
        sender.balance -= amount;
        recipient.balance += amount;
        return true;
      } else {
        return false;
      }
    },

    checkBalance(customerIndex) {
      return this.customers[customerIndex].balance;
    },
  };
}

const customer1 = createCustomer("John Doe", "john@example.com", 1000);
const customer2 = createCustomer("Jane Smith", "jane@example.com", 1500);

const paymentProcessor = createPaymentProcessor();
const customer1Index = paymentProcessor.registerCustomer(customer1);
const customer2Index = paymentProcessor.registerCustomer(customer2);

paymentProcessor.addFunds(customer1Index, 500);
paymentProcessor.makePayment(customer1Index, customer2Index, 200);

console.log(paymentProcessor.checkBalance(customer1Index));  // Expected output: Display the current balance of the customer1
