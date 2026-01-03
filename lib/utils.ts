export const getStatusColor = (status: string) => {
  const colors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return 'CheckCircle';
    case 'pending': return 'Clock';
    case 'processing': return 'Loader';
    case 'cancelled': return 'XCircle';
    default: return 'AlertCircle';
  }
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};