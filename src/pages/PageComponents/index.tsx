import Icon from "@/components/Icon";
import Text from "@/components/Text";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import ButtonIcon from "@/components/ButtonIcon";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Skeleton from "@/components/Skeleton";
import TrashIcon from "@/assets/icons/trash.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import PlusIcon from "@/assets/icons/plus.svg?react";
import SpinnerIcon from "@/assets/icons/spinner.svg?react";
import XIcon from "@/assets/icons/x.svg?react";

export default function PageComponents() {
  return (
    <Container className='py-4'>
      <div className='grid gap-8'>
        <div className='flex flex-col gap-4'>
          <Text as='h3' className='text-pink-base' variant='body-sm-bold'>
            Hello World
          </Text>
          <Text as='h3' className='text-green-base' variant='body-md'>
            Hello World
          </Text>
          <Text as='h3' variant='body-md-bold'>
            Hello World
          </Text>
        </div>

        <div className='flex gap-1'>
          <Icon svg={TrashIcon} />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} />
        </div>

        <div className='flex gap-2'>
          <Badge variant='primary'>2 de 5</Badge>
          <Badge variant='secondary'>5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div className='flex gap-2'>
          <Button icon={PlusIcon}>New task</Button>
          <Button icon={PlusIcon} handling>
            Criando...
          </Button>
        </div>

        <div className='flex gap-2'>
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant='secondary' />
          <ButtonIcon icon={TrashIcon} variant='tertiary' />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
        </div>

        <div>
          <Input />
        </div>

        <div className='flex gap-4'>
          <Checkbox />

          <Checkbox loading />
        </div>

        <div>
          <Card size='md'>Hello World</Card>
        </div>

        <div className='space-y-2'>
          <Skeleton className='h-6' />
          <Skeleton className='h-6' />
          <Skeleton className='w-96 h-6' />
        </div>
      </div>
    </Container>
  );
}
