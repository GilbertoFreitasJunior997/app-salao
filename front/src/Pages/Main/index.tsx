import { FC } from 'react';
//@ts-ignore
import { ReactComponent as Pic } from './assets/RedHairWoman.svg';
import { MainHeaderContainer } from './styles';

const MainPage: FC = () => {
    return (
        <div>
            <MainHeaderContainer>
                <Pic />

                <p className='desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum purus ut ornare consequat. Duis vitae scelerisque sapien, mattis vulputate elit. Quisque ac nibh nec tellus tincidunt elementum sed vitae sem. Praesent pellentesque, velit vel faucibus finibus, libero turpis suscipit elit, ac sagittis neque quam sit amet lectus. Ut nunc est, maximus rhoncus est et, varius rhoncus tortor. Sed pharetra cursus lacus. Ut luctus metus lectus, a varius ligula vestibulum eu. Duis ultrices nec felis sit amet consequat. In non tristique dui, imperdiet ultricies dui.
                    <br />
                    
                    Sed dignissim lacus ut nisl vulputate, at malesuada justo elementum. Mauris mattis vulputate sem. Nulla aliquet tellus at massa dapibus, eu euismod elit varius. Aliquam eu arcu justo. Nulla lacinia leo nunc, quis porta dolor ornare vitae. Maecenas urna dui, euismod vel velit eu, mattis maximus sem. Donec lacinia nec urna et tempus.
                    <br />

                    Vivamus posuere sodales orci quis bibendum. Donec malesuada lectus in elit malesuada blandit. Donec vitae bibendum enim. Maecenas lorem lacus, lobortis ac mauris blandit, aliquet gravida purus. Quisque sit amet ornare est. In hac habitasse platea dictumst. Etiam eget feugiat felis, eu luctus risus.
                    <br />

                    Sed commodo eu eros in hendrerit. Nam quis elit luctus, auctor arcu nec, viverra est. Aenean luctus interdum pulvinar. Vivamus a nisl non ipsum interdum vehicula. Mauris suscipit tincidunt fermentum. Fusce erat neque, tristique nec efficitur ut, hendrerit et sapien. Phasellus egestas nisi leo, ac aliquet augue suscipit eu. Sed malesuada, ex ac luctus porttitor, ante purus imperdiet ex, in placerat elit nisl et libero. Nulla tellus dui, dictum id scelerisque vel, egestas ut ante.
                    <br />

                    Donec ut mi ex. Donec eget feugiat purus. Nullam lorem magna, rhoncus a lorem vitae, pharetra rhoncus nisl. Curabitur gravida cursus ullamcorper. Aenean eget nisl sollicitudin, lobortis purus et, varius ipsum. Morbi congue eros non aliquam egestas. Duis in posuere velit. Aliquam efficitur, lorem quis facilisis volutpat, tortor nisi tincidunt massa, sit amet finibus dolor ipsum semper velit. Sed eget diam vel ipsum pellentesque accumsan. Morbi non odio consectetur, vehicula tellus porttitor, ultricies nulla. In turpis ligula, vestibulum eu libero vitae, tempus interdum mauris. Morbi sollicitudin ultrices odio, sed vehicula elit suscipit nec. Vivamus lorem velit, ornare sed turpis et, pulvinar accumsan ligula. Phasellus risus quam, varius vitae dapibus vel, ornare eu eros.                </p>
            </MainHeaderContainer>
        </div>
    )
}

export default MainPage;
