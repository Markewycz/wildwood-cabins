import { createGuest } from '@/services/apiGuests';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCreateGuest() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(guest => createGuest(guest), {
    mutationKey: ['guests'],
    onSuccess: () => queryClient.invalidateQueries(['guests']),
  });

  return { mutate, isLoading };
}