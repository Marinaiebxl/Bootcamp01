﻿namespace Bootcamp01.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Bootcamp01.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}

