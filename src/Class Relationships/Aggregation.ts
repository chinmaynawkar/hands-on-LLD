// Example of aggregation in TypeScript
// Aggregation is a relationship where one class (Order) can have objects of another class (Item), 
// but both can exist independently. Here, an Order has Items, but Items can exist without Order.

/**
 * Represents an item in the store.
 */
export class Item {
    private name: string;
    private price: number;

    /**
     * Creates a new Item.
     * @param name The name of the item.
     * @param price The price of the item.
     */
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    /**
     * Gets the price of the item.
     */
    public getPrice(): number {
        return this.price;
    }

    /**
     * Gets the name of the item.
     */
    public getName(): string {
        return this.name;
    }
}

/**
 * Represents a customer.
 * This is a simple class to show aggregation. Order uses Customer, 
 * but Customer could exist without any Orders.
 */
export class Customer {
    private name: string;

    /**
     * Creates a new Customer.
     * @param name The name of the customer.
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Gets the customer's name.
     */
    public getName(): string {
        return this.name;
    }
}

/**
 * Represents an order, which aggregates Items and belongs to a Customer.
 */
export class Order {
    private items: Item[] = [];
    private customer: Customer;
    private total: number = 0;

    /**
     * Creates a new Order for a Customer.
     * @param customer The customer placing the order.
     */
    constructor(customer: Customer) {
        this.customer = customer;
    }

    /**
     * Adds an item to the order and updates the total.
     * @param item The item to add.
     */
    public addItem(item: Item): void {
        this.items.push(item);
        this.total += item.getPrice();
    }

    /**
     * Gets the total cost of the order.
     */
    public getTotal(): number {
        return this.total;
    }

    /**
     * Gets the customer associated with the order.
     */
    public getCustomer(): Customer {
        return this.customer;
    }

    /**
     * Gets all items in the order.
     */
    public getItems(): Item[] {
        return this.items;
    }
}



export class Developer {
    private name: string;
    private skills: string[];

    constructor(name:string, skills:string[]) {
        this.name = name;
        this.skills = skills;
    }

    /**
     * Gets the developer's name.
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Gets the developer's skills.
     */
    public getSkills(): string[] {
        return this.skills;
    }
}

export class Team {
    private developers: Developer[] = [];

    constructor(developers: Developer[]) {
        this.developers = developers;
    }

    /**
     * Adds a developer to the team.
     * @param developer The developer to add.
     */
    public addDeveloper(developer: Developer): void {
        this.developers.push(developer);
    }
    
    /**
     * Gets all developers in the team.
     */
    public getDevelopers(): Developer[] {
        return this.developers;
    }
}