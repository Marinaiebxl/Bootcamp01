using Serenity.Services;

namespace Bootcamp01.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}